from config import db

class Usuarios(db.Model):

    # table name
    __tablename__ = 'usuarios'
    IdUsuario = db.Column(db.Integer(), primary_key=True, autoincrement=True)
    Password = db.Column(db.String(), nullable=False)
    UserName = db.Column(db.String(), nullable=False)

    def as_dict(self):
        return {c.name: getattr(self, c.name) for c in self.__table__.columns}