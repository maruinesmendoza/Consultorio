from controllers.controller_base import controllerbase
from flask import Blueprint
from werkzeug.exceptions import HTTPException
from domain.pacienteobrasocial import PacienteObraSocial
from services.service_base import servicebase;

apipacienteObraSocial = Blueprint('pacienteObraSocial', 'pacienteObraSocial')
routeapi = '/pacienteObraSocial'
service = servicebase(PacienteObraSocial)
controllerapi = controllerbase(PacienteObraSocial, service)
@apipacienteObraSocial.route(routeapi, methods=['GET'])
def api_get():
    return controllerapi.api_get()

@apipacienteObraSocial.route(routeapi, methods=['POST'])
def api_post():
    return controllerapi.api_post()

@apipacienteObraSocial.route(routeapi + '/<string:id>', methods=['PUT'])
def api_put(id):
    return controllerapi.api_put(id)

@apipacienteObraSocial.route(routeapi + '/<string:id>', methods=['DELETE'])
def api_delete(id):
    return controllerapi.api_delete(id)

@apipacienteObraSocial.errorhandler(HTTPException)
def handle_exception(e):
    return controllerapi.handle_exception(e)