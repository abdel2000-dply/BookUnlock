#!/usr/bin/python3
"""auth view"""

from flask import jsonify, make_response, request
from flask_login import login_user, logout_user, login_required, current_user
from models.user import User
from api.v1.views import app_views
# from .auth_utils import generate_token

@app_views.route('/login', methods=['POST'], strict_slashes=False)
def login():
    """Logs in a user"""
    data = request.get_json()
    if data is None:
        return make_response(jsonify({"error": "Not a JSON"}), 400)
    
    username = data.get('username')
    password = data.get('password')

    if not (username and password):
        return make_response(jsonify({"error": "Missing required fields"}), 400)

    # Find the user by username
    user = User.query.filter_by(username=username).first()

    # Check if the user exists and if the password is correct
    if user and user.check_password(password):
        login_user(user)
        # token = generate_token(user)
        return make_response(jsonify({"message": "Login successful"}), 200)

    return make_response(jsonify({"error": "Invalid username or password"}), 401)


@app_views.route('/logout', methods=['DELETE'], strict_slashes=False)
@login_required
def logout():
    """Logs out a user"""
    logout_user()
    return make_response(jsonify({"message": "Logout successful"}), 200)

@app_views.route('/signup', methods=['POST'], strict_slashes=False)
def signup():
    """Creates a user"""
    data = request.get_json()
    if data is None:
        return make_response(jsonify({"error": "Not a JSON"}), 400)
    
    username = data.get('username')
    email = data.get('email')
    password = data.get('password')

    # Validate input
    if not (username and email and password):
        return make_response(jsonify({"error": "Missing required fields"}), 400)

    # Check if the username or email is already in use
    user = User.query.filter_by(username=username).first()
    if user:
        return make_response(jsonify({"error": "Username already in use"}), 400)
    user = User.query.filter_by(email=email).first()
    if user:
        return make_response(jsonify({"error": "Email already in use"}), 400)

    # Create the user
    user = User(username=username, email=email, password=password)
    # user.set_password(password)
    user.save()
    return make_response(jsonify(user.to_dict()), 201)
