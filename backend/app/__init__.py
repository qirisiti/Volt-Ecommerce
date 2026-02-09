import os
from flask import Flask
from flask_cors import CORS
from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate

from .config import config_by_name

# Load .env early
from dotenv import load_dotenv
load_dotenv()

db = SQLAlchemy()
migrate = Migrate()
from app.models.user import User, UserRole 


def create_app():
    app = Flask(__name__)

    env = os.getenv("FLASK_ENV", "development")
    app.config.from_object(config_by_name[env])

    CORS(app)

    db.init_app(app)
    migrate.init_app(app, db)

    @app.route("/health")
    def health():
        return {"status": "ok"}, 200

    return app