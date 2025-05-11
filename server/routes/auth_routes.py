from flask import Blueprint, request, jsonify
from flask_security import login_user, current_user, login_required
from server.models import User

# Define your Blueprint for authentication routes
auth_bp = Blueprint('auth', __name__)

@auth_bp.route('/login', methods=['POST'])
def login():
    data = request.get_json()  
    email = data.get('email') 
    password = data.get('password')  

    user = User.query.filter_by(email=email).first()

    if not user:
        return jsonify({'error': 'Invalid credentials'}), 401 

    if not user.check_password(password): 
        return jsonify({'error': 'Invalid password'}), 401  

    # If everything is correct, log the user in (this will set the session cookie automatically)
    login_user(user)  # This will automatically manage the session and CSRF token

    return jsonify({'message': 'Logged in successfully'}), 200



@auth_bp.route('/check-auth', methods=['GET'])
@login_required  # This ensures that only logged-in users can access this route
def check_auth():
    if current_user.is_authenticated:
        return jsonify({'message': 'User is authenticated', 'user_id': current_user.id}), 200
    else:
        return jsonify({'message': 'User is not authenticated'}), 401
