#!/usr/bin/env python
from config import app
from controllers.paciente_controller import api
from controllers.consulta_controller import apiconsulta
from controllers.obrasocial_controller import apiobrasocial

# register the api

app.register_blueprint(api)
app.register_blueprint(apiconsulta)
app.register_blueprint(apiobrasocial)

if __name__ == '__main__':
    ''' run application '''
    app.run(host='0.0.0.0', port=5000)
