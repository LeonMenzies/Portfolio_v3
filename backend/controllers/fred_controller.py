from flask import Blueprint, request
from flask_jwt_extended import jwt_required
from helpers.api_exception import ApiException
from models.applications import Applications
from helpers.api_helpers import APIHelpers
from helpers.fred_helper import FredHelper

bp = Blueprint('fred', __name__, url_prefix='/api/fred')


@bp.route('/gdp-tile-data', methods=['GET'])
@jwt_required()
def get_applications():
    try:
        helper = APIHelpers(request)

        fred = FredHelper()
        data = fred.get_gdp_tile_data()

        return helper.success_response(data)
    except ApiException as e:
        raise e
   