#!/usr/bin/env python
from domain.usuarios import Usuarios

class UsuarioService():

    def login(username,password):
        user = Usuarios.query.filter(Usuarios.UserName == username, Usuarios.Password == password).first()
        return user
        
    


