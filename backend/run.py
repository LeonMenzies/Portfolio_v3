import os

from flask import Flask
from dotenv import load_dotenv
from flask_jwt_extended import JWTManager
from helpers.api_exception import ApiException
from helpers.database import db
from flask import Flask, jsonify
from flask_jwt_extended import JWTManager
from flask_cors import CORS

from controllers import fred_controller
from controllers import auth_controller

load_dotenv() 
app = Flask(__name__)
CORS(app, supports_credentials=True)


app.config['JWT_SECRET_KEY'] = os.getenv('JWT_SECRET_KEY')
app.config['SQLALCHEMY_DATABASE_URI'] = os.getenv('SQLALCHEMY_DATABASE_URI')
app.config['JWT_TOKEN_LOCATION'] = ['cookies']
app.config['JWT_COOKIE_CSRF_PROTECT'] = False

jwt = JWTManager(app)

# Initialize the SQLAlchemy db instance
db.init_app(app)

with app.app_context():
    db.create_all()

# Register the blueprints
app.register_blueprint(fred_controller.bp)
app.register_blueprint(auth_controller.bp)

@app.errorhandler(ApiException)
def handle_api_exception(error):
    response = jsonify({
        'success': False,
        'errorMessage': str(error.message),
    })
    response.status_code = 400
    return response
        

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=3000, debug=True)