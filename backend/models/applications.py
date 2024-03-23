from sqlalchemy import Enum, String, Column, Integer, ForeignKey
from helpers.database import db
from enum import Enum as PyEnum

class ApplicationStatus(PyEnum):
    NEW = "new"
    APPLIED = "applied"
    ACCEPTED = "accepted"
    DECLINED = "declined"

class Applications(db.Model):
    id = Column(Integer, primary_key=True)
    userId = Column(Integer, ForeignKey('users.id'), nullable=False)
    companyName = Column(String(100), nullable=False)
    jobTitle = Column(String(100), nullable=False)
    status = Column(Enum(*ApplicationStatus.__members__), nullable=False)
    email = Column(String(100), nullable=False)

    def __repr__(self):
        return '<Applications %r>' % self.CompanyName