#!/usr/bin/python3
"""User view"""
from flask import jsonify, make_response
from api.v1.views import app_views
from models.user import User

@app_views.route('/users', methods=['GET'], strict_slashes=False)
def get_users():
    """Returns all users"""
    users = User.query.all()
    return make_response(jsonify([user.to_dict() for user in users]), 200)

@app_views.route('/users/<user_id>', methods=['GET'], strict_slashes=False)
def get_user(user_id):
    """Returns a user"""
    user = User.query.get(user_id)
    if user is None:
        return make_response(jsonify({"error": "Not found"}), 404)
    return make_response(jsonify(user.to_dict()), 200)
