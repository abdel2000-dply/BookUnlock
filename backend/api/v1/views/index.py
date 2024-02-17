#!/usr/env python3
"""Index view"""
from flask import jsonify, make_response
from api.v1.views import app_views


@app_views.route('/status', methods=['GEt'])
def get_status():
    """Returns the status of the api"""
    return make_response(jsonify({"status": "OK"}), 200)
