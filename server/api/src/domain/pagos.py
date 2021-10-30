from config import db

class Pagos(db.Model):

    # table name
    __tablename__ = 'pagos'
    IdPagos  = db.Column(db.Integer(), primary_key=True, autoincrement=True)
    IdConsulta = db.Column(db.Integer(), nullable=False)
    IdPaciente = db.Column(db.Integer(), nullable=False)
    Monto = db.Column(db.Decimal(), nullable=False)
    Observaciones = db.Column(db.String(), nullable=False)

    def as_dict(self):
        return {c.name: getattr(self, c.name) for c in self.__table__.columns}