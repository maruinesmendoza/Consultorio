from controllers.controller_base import controllerbase
from flask import Blueprint
from werkzeug.exceptions import HTTPException
from domain.laboratorio import Laboratorio
from services.service_base import servicebase;
from flask_cors import CORS

apilaboratorio = Blueprint('laboratorio', 'laboratorio')
routeapi = '/api/laboratorio'
service = servicebase(Laboratorio)
CORS(apilaboratorio)
controllerapi = controllerbase(Laboratorio, service)

@apilaboratorio.route(routeapi, methods=['GET'])
def api_get():
    return controllerapi.api_get()

@apilaboratorio.route(routeapi, methods=['POST'])
def api_post():
    return controllerapi.api_post()

@apilaboratorio.route(routeapi + '/<string:id>', methods=['PUT'])
def api_put(id):
    return controllerapi.api_put(id)

@apilaboratorio.route(routeapi + '/<string:id>', methods=['DELETE'])
def api_delete(id):
    return controllerapi.api_delete(id)

@apilaboratorio.errorhandler(HTTPException)
def handle_exception(e):
    return controllerapi.handle_exception(e)