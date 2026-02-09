import os
from pathlib import Path


basedir = Path(__file__).resolve().parent.parent


class Config:
    # Common settings
    SECRET_KEY = os.getenv("SECRET_KEY", "dev-secret-change-me")
    FLASK_ENV = os.getenv("FLASK_ENV", "development")

    # Database (change to PostgreSQL later)
    SQLALCHEMY_DATABASE_URI = os.getenv(
        "DATABASE_URL",
        f"sqlite:///{basedir}/volt-dev.db"
    )
    SQLALCHEMY_TRACK_MODIFICATIONS = False

    # Rate limiting (simple in-memory for start)
    RATELIMIT_STORAGE_URL = "memory://"
    RATELIMIT_STRATEGY = "fixed-window"

    # More settings can be added here later


class DevelopmentConfig(Config):
    DEBUG = True


class ProductionConfig(Config):
    DEBUG = False
    # Add secure settings here later


config_by_name = {
    "development": DevelopmentConfig,
    "production": ProductionConfig,
    "default": DevelopmentConfig,
}