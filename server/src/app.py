#!/usr/bin/env python
from config import app
from controllers.amp_controller import apiamp
from controllers.consulta_controller import apiconsulta
from controllers.gestionturnos import apigestionTurnos
from controllers.obrasocial_controller import apiobrasocial
from controllers.paciente_controller import api
from controllers.pacienteobrasocial_controller import apipacienteObraSocial
from controllers.pagos_controller import apipagos
from controllers.persona_controller import apipersona
from controllers.usuarios_controller import apiusuarios


# register the api

app.register_blueprint(apiamp)
app.register_blueprint(apiconsulta)
app.register_blueprint(apigestionTurnos)
app.register_blueprint(apiobrasocial)
app.register_blueprint(api)
app.register_blueprint(apipacienteObraSocial)
app.register_blueprint(apipagos)
app.register_blueprint(apipersona)
app.register_blueprint(apiusuarios)

if __name__ == '__main__':
    ''' run application '''
    app.run(host='0.0.0.0', port=5000)
