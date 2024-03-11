#!/usr/bin/python3
"""User model"""

import os
from flask_sqlalchemy import SQLAlchemy
from sqlalchemy import Column, Integer, String, DateTime, ForeignKey
from sqlalchemy.sql import func

# add hashed password support
from werkzeug.security import generate_password_hash, check_password_hash
from flask_login import UserMixin

from .base_model import BaseModel, db

class User(BaseModel):
    """User model"""
    __tablename__ = 'users'
    username = Column(String(80), unique=True, nullable=False)
    email = Column(String(120), unique=True, nullable=False)
    password = Column(String(128), nullable=False)

    def __init__(self, username, email, password):
        self.username = username
        self.email = email
        self.password = password

    def __str__(self):
        return self.username

    def __repr__(self):
        return self.username
    
    def to_dict(self):
        return {
            "id": self.id,
            "username": self.username,
            "email": self.email
        }

    def set_password(self, password):
        """Set the password"""
        self.password = generate_password_hash(password)
    
    def check_password(self, password):
        """Check the password"""
        # return check_password_hash(self.password, password)
        return self.password == password

    @property
    def is_authenticated(self):
        return True
    
    @property
    def is_active(self):
        return True
    
    def get_id(self):
        return self.id