#!/usr/bin/env python
from domain.paciente import Paciente
from config import db
from werkzeug.exceptions import NotFound

def get():
    '''
    Get all entities
    :returns: all entity
    '''
    return Paciente.query.all()

def post(body):
    '''
    Create entity with body
    :param body: request body
    :returns: the created entity
    '''
    entity = Paciente(**body)
    db.session.add(entity)
    db.session.commit()
    return entity

def put(body):
    '''
    Update entity by id
    :param body: request body
    :returns: the updated entity
    '''
    entity = Paciente.query.get(body['id'])
    if entity:
        entity = Paciente(**body)
        db.session.merge(entity)
        db.session.flush()
        db.session.commit()
        return entity
    raise NotFound('no such entity found with id=' + str(body['id']))

def delete(id):
    '''
    Delete entity by id
    :param id: the entity id
    :returns: the response
    '''
    entity = Paciente.query.get(id)
    if entity:
        db.session.delete(entity)
        db.session.commit()
        return {'success': True}
    raise NotFound('no such entity found with id=' + str(id))


