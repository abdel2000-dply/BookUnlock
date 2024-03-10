#!/usr/bin/python3
"""Base model"""

import os
from flask_sqlalchemy import SQLAlchemy
from sqlalchemy import Column, Integer, String, DateTime, ForeignKey, Float, Boolean
from sqlalchemy.sql import func
from uuid import uuid4

db = SQLAlchemy ()

class BaseModel(db.Model):
    """Base model"""
    __abstract__ = True
    id = Column(String(60), primary_key=True, default=lambda: str(uuid4()))
    created_at = Column(DateTime(timezone=True), server_default=func.now())
    updated_at = Column(DateTime(timezone=True), server_default=func.now(), onupdate=func.now())
    deleted_at = Column(DateTime(timezone=True), nullable=True)
    is_deleted = Column(Boolean, default=False)

    def save(self):
        db.session.add(self)
        db.session.commit()

    def delete(self):
        self.is_deleted = True
        self.deleted_at = func.now()
        db.session.commit()
