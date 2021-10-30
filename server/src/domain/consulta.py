from config import db

class Consulta(db.Model):

    # table name
    __tablename__ = 'consulta'
    IdConsulta  = db.Column(db.Integer(), primary_key=True, autoincrement=True)
    IdObraSocial = db.Column(db.Integer(), nullable=False)
    IdGestionturno = db.Column(db.Integer(), nullable=False)
    Fecha = db.Column(db.DateTime(), nullable=False)
    IdPaciente = db.Column(db.Integer(), nullable=False)

    def as_dict(self):
        return {c.name: getattr(self, c.name) for c in self.__table__.columns}