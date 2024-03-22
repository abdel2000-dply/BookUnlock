#!/usr/bin/python3
"""auth utils view"""

from flask import current_app
import jwt
from datetime import datetime, timedelta
from flask_login import current_user

def generate_token(user):
    expiration = datetime.utcnow() + timedelta(days=current_app.config['TOKEN_EXPIRATION_DAYS'])
    token_data = {
        'user_id': user.id,
        'exp': expiration
    }
    return jwt.encode(token_data, current_app.config['SECRET_KEY'], algorithm='HS256')
