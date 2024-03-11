from flask import Flask
from flask_login import LoginManager
from models.base_model import db
from models.user import User
from flask_migrate import Migrate
from flask_cors import CORS
import os

app = Flask(__name__)
CORS(app, resources={r"/*": {"origins": "*"}})

# Directly set configuration variables
app.config['SECRET_KEY'] = os.environ.get('SECRET_KEY', '12345678')
app.config['SQLALCHEMY_DATABASE_URI'] = os.environ.get('DATABASE_URI', "postgresql://postgres:postgres@localhost/bookunluck_db")
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.config['TOKEN_EXPIRATION_DAYS'] = 1

from models.base_model import db
from flask_login import LoginManager

db.init_app(app)

migrate = Migrate(app, db)

login_manager = LoginManager()
login_manager.login_view = 'login'
login_manager.init_app(app)

from api.v1.views import app_views

app.register_blueprint(app_views)

if __name__ == "__main__":
    app.run(host='0.0.0.0', port=5000, debug=True, strict_slashes=True)
