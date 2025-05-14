from flask import Blueprint, request, jsonify
from flask_login import login_user, logout_user, current_user
from flask_security.utils import verify_password, hash_password
from server.models import User # or wherever your User model is
from flask_login import logout_user
from flask import session


auth_bp = Blueprint('auth', __name__)

@auth_bp.route('/login', methods=['POST'])
def login():
    data = request.get_json()
    email = data.get('email')
    password = data.get('password')

    user = User.query.filter_by(email=email).first()

    if user and verify_password(password, user.password):
        login_user(user)
        return jsonify({'message': 'Login successful'}), 200
    else:
        return jsonify({'error': 'Invalid credentials'}), 401

@auth_bp.route('/register', methods=['POST'])
def register():
    data = request.get_json()
    email = data.get('email')
    password = data.get('password')

    if not email or not password:
        return jsonify({'error': 'Email and password are required'}), 400

    if User.query.filter_by(email=email).first():
        return jsonify({'error': 'User already exists'}), 400

    hashed_password = hash_password(password)
    new_user = User(email=email, password=hashed_password)

    db.session.add(new_user)
    db.session.commit()

    login_user(new_user)  # optional: auto-login after registration

    return jsonify({'message': 'User registered successfully'}), 201

@auth_bp.route('/check-auth', methods=['GET'])
def check_auth():
    if current_user.is_authenticated:
        return jsonify({'authenticated': True, 'email': current_user.email}), 200
    else:
        return jsonify({'authenticated': False}), 200
@auth_bp.route('/logout', methods=['POST'])
def logout():
    logout_user()
    session.clear()  # optional, clears all session data
    return jsonify({'message': 'User logged out successfully'}), 200
