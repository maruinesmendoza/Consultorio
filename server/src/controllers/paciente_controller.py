#!/usr/bin/env python
from flask import Blueprint, jsonify, request
import services.paciente_service as paciente_service
from domain.paciente import Paciente
from werkzeug.exceptions import HTTPException
import json

api = Blueprint('pacientes', 'pacientes')


@api.route('/pacientes', methods=['GET'])
def api_get():
    ''' Get all entities'''
    entities = paciente_service.get()
    return jsonify([entity.as_dict() for entity in entities])

@api.route('/pacientes', methods=['POST'])
def api_post():
    ''' Create entity'''
    entity = paciente_service.post(request.json)
    return jsonify(entity.as_dict())

@api.route('/pacientes/<string:id>', methods=['PUT'])
def api_put(id):
    ''' Update entity by id'''
    body = request.json
    body['id'] = id
    res = paciente_service.put(body)
    return jsonify(res.as_dict()) if isinstance(res, Paciente) else jsonify(res)

@api.route('/pacientes/<string:id>', methods=['DELETE'])
def api_delete(id):
    ''' Delete entity by id'''
    res = paciente_service.delete(id)
    return jsonify(res)

@api.errorhandler(HTTPException)
def handle_exception(e):
    """Return JSON format for HTTP errors."""
    # start with the correct headers and status code from the error
    response = e.get_response()
    # replace the body with JSON
    response.data = json.dumps({
        'success': False,
        "message": e.description
    })
    response.content_type = "application/json"
    return response