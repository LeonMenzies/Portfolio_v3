from flask import jsonify
from flask_jwt_extended import get_jwt_identity, jwt_required

class APIHelpers:
    def __init__(self, request):
        self.request = request

    def get_content(self):
        if self.request.is_json:
            content = self.request.json.get('content')
        else:
            content = self.request.form.to_dict()
        return content

    def get_parameters(self, param):
        if self.request.is_json:
            parameters = self.request.json.get(param, None)
        else:
            parameters = self.request.form.get(param, None)
        return parameters
    
    def success_response(self, data=None):
        response = {
            'success': True,
            'errorMessage': ''
        }
        if data is not None:
            response['data'] = data
        return jsonify(response)