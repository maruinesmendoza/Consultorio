from controllers.controller_base import controllerbase
from flask import Blueprint
from werkzeug.exceptions import HTTPException
from domain.apm import Apm
from services.service_base import servicebase;

apiamp = Blueprint('amp', 'amp')
routeapi = '/consulta'
service = servicebase(Apm)
controllerapi = controllerbase(Apm, service)
@apiamp.route(routeapi, methods=['GET'])
def api_get():
    return controllerapi.api_get()

@apiamp.route(routeapi, methods=['POST'])
def api_post():
    return controllerapi.api_post()

@apiamp.route(routeapi + '/<string:id>', methods=['PUT'])
def api_put(id):
    return controllerapi.api_put(id)

@apiamp.route(routeapi + '/<string:id>', methods=['DELETE'])
def api_delete(id):
    return controllerapi.api_delete(id)

@apiamp.errorhandler(HTTPException)
def handle_exception(e):
    return controllerapi.handle_exception(e)