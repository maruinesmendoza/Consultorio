#!/usr/bin/env python
from domain.persona import Persona

class PersonaService():

    def buscarPersona(DNI):
        persona = Persona.query.filter(Persona.DNI == DNI).first()
        return persona
        
    


