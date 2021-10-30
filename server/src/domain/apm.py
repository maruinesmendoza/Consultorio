from config import db

class Apm(db.Model):

    # table name
    __tablename__ = 'apm'
    IdApm  = db.Column(db.Integer(), primary_key=True, autoincrement=True)
    IdLaboratorio = db.Column(db.Integer(), nullable=False)
    IdPersona = db.Column(db.Integer(), nullable=False)

    def as_dict(self):
        return {c.name: getattr(self, c.name) for c in self.__table__.columns}