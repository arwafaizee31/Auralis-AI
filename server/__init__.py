# server/__init__.py
from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask_security import Security
from flask_session import Session
from flask_cors import CORS
from flask_migrate import Migrate

db = SQLAlchemy()
migrate = Migrate()
security = Security()
session = Session()

def create_app():
    app = Flask(__name__)
    CORS(app, supports_credentials=True)

    # Configuration
    app.config['SECRET_KEY'] = 'your-secret-key'
    app.config['SQLALCHEMY_DATABASE_URI'] = 'mysql+pymysql://root:@localhost:3306/auralis_db'
    app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

    # Initialize extensions
    db.init_app(app)
    migrate.init_app(app, db)
    security.init_app(app)
    session.init_app(app)
    app.config['SESSION_TYPE'] = 'filesystem'  # You can also use 'sqlalchemy' or others

    from server.routes.auth_routes import auth_bp
    app.register_blueprint(auth_bp)

    return app
