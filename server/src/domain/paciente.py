from config import db

class Paciente(db.Model):

    # table name
    __tablename__ = 'paciente'
    idpaciente = db.Column(db.Integer(), primary_key=True, autoincrement=True)
    idpersona = db.Column(db.Integer(), nullable=False)

    def as_dict(self):
        return {c.name: getattr(self, c.name) for c in self.__table__.columns}