from config import db

class GestionTurnos(db.Model):

    # table name
    __tablename__ = 'gestionturnos'
    IdGestionTurno  = db.Column(db.Integer(), primary_key=True, autoincrement=True)
    Fecha = db.Column(db.DateTime(), nullable=False)
    IdObraSocial = db.Column(db.Integer(), nullable=False)
    IdPaciente = db.Column(db.Integer(), nullable=False)

    def as_dict(self):
        return {c.name: getattr(self, c.name) for c in self.__table__.columns}