from flask import Flask, jsonify
from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate
from flask_security import Security
from flask_cors import CORS
from flask_session import Session
from flask_wtf import CSRFProtect
from flask_login import LoginManager
from server import db
from server.models import user_datastore
from server.routes.auth_routes import auth_bp
from server.routes.api_routes import api_bp

app = Flask(__name__)
CORS(app, supports_credentials=True, origins=['http://localhost:3000'])

# ——— CONFIG ———
app.config.update(
    SECRET_KEY='your-secret-key',
    SQLALCHEMY_DATABASE_URI='mysql+pymysql://root:@localhost:3306/auralis_db',
    SQLALCHEMY_TRACK_MODIFICATIONS=False,
    SECURITY_PASSWORD_SALT='your-salt',
    SECURITY_PASSWORD_HASH='pbkdf2_sha512',
    SECURITY_REGISTERABLE=True,
    SECURITY_SEND_REGISTER_EMAIL=False,
    SESSION_TYPE='filesystem',
)

# ——— EXTENSIONS ———
db.init_app(app)
Migrate(app, db)
CSRFProtect(app)
Session(app)

# Initialize Flask-Login’s manager
login_manager = LoginManager()
login_manager.init_app(app)

# Return JSON 401 instead of redirecting
@login_manager.unauthorized_handler
def unauthorized_callback():
    return jsonify({'authenticated': False}), 401

# Initialize Flask-Security (this wires up user_datastore, etc.)
security = Security(app, user_datastore)

# ——— BLUEPRINTS ———
app.register_blueprint(api_bp, url_prefix='/api')
app.register_blueprint(auth_bp)   # /register, /login, /auth-status, /logout

@app.route('/')
def home():
    return 'Flask Security + MySQL setup complete!'

if __name__ == '__main__':
    app.run(debug=True, port=5000)
