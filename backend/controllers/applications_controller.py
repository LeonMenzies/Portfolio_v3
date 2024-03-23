from flask import Blueprint, request
from flask_jwt_extended import jwt_required
from helpers.api_exception import ApiException
from models.applications import Applications
from helpers.database import db
from helpers.api_helpers import APIHelpers

bp = Blueprint('applications', __name__, url_prefix='/api')

@bp.route('/applications', methods=['POST'])
@jwt_required()
def post_application():
    try:
        helper = APIHelpers(request)
        content = helper.get_content()

        print(content)

        # Create a new application
        application = Applications(**content)
        # Add the new application to the database
        db.session.add(application)
        db.session.commit()

        return helper.success_response()
    except ApiException as e:
        raise e

@bp.route('/applications', methods=['GET'])
@jwt_required()
def get_applications():
    try:
        helper = APIHelpers(request)

        # Query the database
        applications = Applications.query.all()
        # Convert the query result to JSON
        data = [{'id': application.id, 'companyName': application.companyName, 'jobTitle': application.jobTitle, 'status': application.status, 'email': application.email} for application in applications]

        return helper.success_response(data)
    except ApiException as e:
        raise e
    
@bp.route('/applications/<int:id>', methods=['GET'])
@jwt_required()
def get_application(id):
    try:
        helper = APIHelpers(request)

        # Find the application
        application = Applications.query.get(id)
        if not application:
            raise ApiException('Application not found', 404)

        # Convert the application to JSON
        data = {
            'id': application.id, 
            'companyName': application.companyName, 
            'jobTitle': application.jobTitle, 
            'status': application.status, 
            'email': application.email
        }

        return helper.success_response(data)
    except ApiException as e:
        raise e

@bp.route('/applications/<int:id>', methods=['PUT'])
@jwt_required()
def update_application(id):
    try:
        helper = APIHelpers(request)
        content = helper.get_content()

        # Find the application
        application = Applications.query.get(id)
        if not application:
            raise ApiException('Application not found', 404)

        # Update the application
        for key, value in content.items():
            setattr(application, key, value)

        db.session.commit()

        return helper.success_response()
    except ApiException as e:
        raise e

@bp.route('/applications/<int:id>', methods=['DELETE'])
@jwt_required()
def delete_application(id):
    try:
        helper = APIHelpers(request)

        # Find the application
        application = Applications.query.get(id)
        if not application:
            raise ApiException('Application not found', 404)

        # Delete the application
        db.session.delete(application)
        db.session.commit()

        return helper.success_response()
    except ApiException as e:
        raise e