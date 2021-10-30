from config import db

class PacienteObraSocial(db.Model):

    # table name
    __tablename__ = 'paciente'
    IdPaciente = db.Column(db.Integer(), primary_key=True, autoincrement=True)
    IdObraSocial = db.Column(db.Integer(), nullable=False)

    def as_dict(self):
        return {c.name: getattr(self, c.name) for c in self.__table__.columns}