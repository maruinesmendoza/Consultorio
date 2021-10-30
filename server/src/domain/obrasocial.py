from config import db

class ObraSocial(db.Model):

    # table name
    __tablename__ = 'obrasocial'
    IdObraSocial  = db.Column(db.Integer(), primary_key=True, autoincrement=True)
    Descripcion = db.Column(db.String(), nullable=False)

    def as_dict(self):
        return {c.name: getattr(self, c.name) for c in self.__table__.columns}