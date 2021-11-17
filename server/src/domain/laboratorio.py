from config import db

class Laboratorio(db.Model):

    # table name
    __tablename__ = 'laboratorio'
    Idlaboratorio= db.Column(db.Integer(), primary_key=True, autoincrement=True)
    Descripcion = db.Column(db.Integer(), nullable=False)
    Medicamentos= db.Column(db.Integer(), nullable=False)
    Nombre_Laboratorio = db.Column(db.Integer(), nullable=False)
   

    def as_dict(self):
        return {c.name: getattr(self, c.name) for c in self.__table__.columns}