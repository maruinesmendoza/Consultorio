from controllers.controller_base import controllerbase
from flask import Blueprint
from werkzeug.exceptions import HTTPException
from domain.persona import Persona
from services.service_base import servicebase;

apipersona = Blueprint('persona', 'persona')
routeapi = '/api/persona'
service = servicebase(Persona)
controllerapi = controllerbase(Persona, service)
@apipersona.route(routeapi, methods=['GET'])
def api_get():
    return controllerapi.api_get()

@apipersona.route(routeapi, methods=['POST'])
def api_post():
    return controllerapi.api_post()

@apipersona.route(routeapi + '/<string:id>', methods=['PUT'])
def api_put(id):
    return controllerapi.api_put(id)

@apipersona.route(routeapi + '/<string:id>', methods=['DELETE'])
def api_delete(id):
    return controllerapi.api_delete(id)

@apipersona.errorhandler(HTTPException)
def handle_exception(e):
    return controllerapi.handle_exception(e)