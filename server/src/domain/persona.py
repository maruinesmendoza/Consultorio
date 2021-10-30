from config import db

class Persona(db.Model):

    # table name
    __tablename__ = 'persona'
    IdPersona  = db.Column(db.Integer(), primary_key=True, autoincrement=True)
    Apellido = db.Column(db.String(), nullable=False)
    Celular = db.Column(db.String(), nullable=False)
    Direccion = db.Column(db.String(), nullable=False)
    Dni = db.Column(db.String(), nullable=False)
    Email = db.Column(db.String(), nullable=False)
    FechaNacimiento = db.Column(db.DateTime(), nullable=False)
    Nombre = db.Column(db.String(), nullable=False)
    Tel = db.Column(db.String(), nullable=False)
    def as_dict(self):
        return {c.name: getattr(self, c.name) for c in self.__table__.columns}