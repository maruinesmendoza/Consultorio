from controllers.controller_base import controllerbase
from flask import Blueprint
from werkzeug.exceptions import HTTPException
from domain.usuarios import Usuarios
from services.service_base import servicebase;

apiusuarios = Blueprint('usuarios', 'usuarios')
routeapi = '/usuarios'
service = servicebase(Usuarios)
controllerapi = controllerbase(Usuarios, service)
@apiusuarios.route(routeapi, methods=['GET'])
def api_get():
    return controllerapi.api_get()

@apiusuarios.route(routeapi, methods=['POST'])
def api_post():
    return controllerapi.api_post()

@apiusuarios.route(routeapi + '/<string:id>', methods=['PUT'])
def api_put(id):
    return controllerapi.api_put(id)

@apiusuarios.route(routeapi + '/<string:id>', methods=['DELETE'])
def api_delete(id):
    return controllerapi.api_delete(id)

@apiusuarios.errorhandler(HTTPException)
def handle_exception(e):
    return controllerapi.handle_exception(e)