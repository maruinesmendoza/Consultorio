from controllers.controller_base import controllerbase
from flask import Blueprint
from werkzeug.exceptions import HTTPException
from domain.pagos import Pagos
from services.service_base import servicebase;

apipagos = Blueprint('pagos', 'pagos')
routeapi = '/pagos'
service = servicebase(Pagos)
controllerapi = controllerbase(Pagos, service)
@apipagos.route(routeapi, methods=['GET'])
def api_get():
    return controllerapi.api_get()

@apipagos.route(routeapi, methods=['POST'])
def api_post():
    return controllerapi.api_post()

@apipagos.route(routeapi + '/<string:id>', methods=['PUT'])
def api_put(id):
    return controllerapi.api_put(id)

@apipagos.route(routeapi + '/<string:id>', methods=['DELETE'])
def api_delete(id):
    return controllerapi.api_delete(id)

@apipagos.errorhandler(HTTPException)
def handle_exception(e):
    return controllerapi.handle_exception(e)