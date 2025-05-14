# server/routes/auth_routes.py
from flask import Blueprint, request, jsonify, session
from flask_login import login_user, logout_user, current_user, login_required
from flask_security.utils import verify_password, hash_password
from server import db                 # <<— import the SQLAlchemy instance
from server.models import User

auth_bp = Blueprint('auth', __name__)

@auth_bp.route('/register', methods=['POST'])
def register():
    data = request.get_json()
    email = data.get('email')
    password = data.get('password')

    if not email or not password:
        return jsonify({'error': 'Email and password are required'}), 400

    if User.query.filter_by(email=email).first():
        return jsonify({'error': 'User already exists'}), 400

    new_user = User(email=email, password=hash_password(password))
    db.session.add(new_user)
    db.session.commit()

    login_user(new_user)
    return jsonify({'message': 'User registered successfully'}), 201

@auth_bp.route('/login', methods=['POST'])
def login():
    data = request.get_json()
    user = User.query.filter_by(email=data.get('email')).first()

    if user and verify_password(data.get('password'), user.password):
        login_user(user)
        return jsonify({'message': 'Login successful'}), 200

    return jsonify({'error': 'Invalid credentials'}), 401

@auth_bp.route('/auth-status', methods=['GET'])
@login_required
def auth_status():
    return jsonify({'authenticated': True, 'email': current_user.email}), 200

@auth_bp.route('/logout', methods=['POST'])
@login_required
def logout():
    logout_user()
    session.clear()
    return jsonify({'message': 'User logged out successfully'}), 200
