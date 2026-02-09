from flask import Blueprint, request, jsonify
from sqlalchemy.orm import Session

from app import db
from app.auth.schemas import UserCreate, UserOut, Token
from app.auth.services import create_user, authenticate_user
from app.auth.utils import create_access_token, create_refresh_token

auth_bp = Blueprint('auth', __name__, url_prefix='/auth')


@auth_bp.route('/register', methods=['POST'])
def register():
    data = request.get_json()
    if not data:
        return jsonify({"detail": "Invalid JSON"}), 400

    try:
        user_in = UserCreate(**data)
    except ValueError as e:
        return jsonify({"detail": str(e)}), 422

    db_user = create_user(db.session, user_in)
    return jsonify(UserOut.from_orm(db_user).dict()), 201


@auth_bp.route('/login', methods=['POST'])
def login():
    data = request.get_json()
    if not data or 'email' not in data or 'password' not in data:
        return jsonify({"detail": "Email and password required"}), 400

    user = authenticate_user(db.session, data['email'], data['password'])
    if not user:
        return jsonify({"detail": "Incorrect email or password"}), 401

    access_token = create_access_token(subject=str(user.id))
    refresh_token = create_refresh_token(subject=str(user.id))

    return jsonify({
        "access_token": access_token,
        "refresh_token": refresh_token,
        "token_type": "bearer"
    })


@auth_bp.route('/refresh', methods=['POST'])
def refresh_token():
    return jsonify({"detail": "Refresh not implemented yet"}), 501