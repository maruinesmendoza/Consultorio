from controllers.controller_base import controllerbase
from flask import Blueprint
from werkzeug.exceptions import HTTPException
from domain.gestionturnos import GestionTurnos
from services.service_base import servicebase;

apigestionTurnos = Blueprint('gestionTurnos', 'gestionTurnos')
routeapi = '/gestionTurnos'
service = servicebase(GestionTurnos)
controllerapi = controllerbase(GestionTurnos, service)
@apigestionTurnos.route(routeapi, methods=['GET'])
def api_get():
    return controllerapi.api_get()

@apigestionTurnos.route(routeapi, methods=['POST'])
def api_post():
    return controllerapi.api_post()

@apigestionTurnos.route(routeapi + '/<string:id>', methods=['PUT'])
def api_put(id):
    return controllerapi.api_put(id)

@apigestionTurnos.route(routeapi + '/<string:id>', methods=['DELETE'])
def api_delete(id):
    return controllerapi.api_delete(id)

@apigestionTurnos.errorhandler(HTTPException)
def handle_exception(e):
    return controllerapi.handle_exception(e)