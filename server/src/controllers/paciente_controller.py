#!/usr/bin/env python
from flask import Blueprint, jsonify, request
import services.paciente_service as paciente_service
from domain.paciente import Paciente
from werkzeug.exceptions import HTTPException
import json
from flask_cors import CORS


api = Blueprint('pacientes', 'pacientes')
service = servicebase(Paciente)
controllerapi = controllerbase(Paciente, service)
CORS(Paciente)

@Paciente.route(routeapi, methods=['GET'])
def api_get():
    return controllerapi.api_get()

@Paciente.route(routeapi, methods=['POST'])
def api_post():
    return controllerapi.api_post()

@Paciente.route(routeapi + '/<string:id>', methods=['PUT'])
def api_put(id):
    return controllerapi.api_put(id)

@Paciente.route(routeapi + '/<string:id>', methods=['DELETE'])
def api_delete(id):
    return controllerapi.api_delete(id)

@Paciente.errorhandler(HTTPException)
def handle_exception(e):
    return controllerapi.handle_exception(e)



