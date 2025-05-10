# server/app.py

from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate
from flask_security import Security
from flask_cors import CORS
from server import db  # Now valid
from server.models import user_datastore

from flask_security import SQLAlchemyUserDatastore

# Create Flask app
app = Flask(__name__)
CORS(app, supports_credentials=True)

# Configuration
app.config['DEBUG'] = True
app.config['SECRET_KEY'] = 'your-secret-key'
app.config['SQLALCHEMY_DATABASE_URI'] = 'mysql+pymysql://root:@localhost:3306/auralis_db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.config['SECURITY_PASSWORD_SALT'] = 'your-salt'
app.config['SECURITY_REGISTERABLE'] = True
app.config['SECURITY_SEND_REGISTER_EMAIL'] = False
app.config['SECURITY_TOKEN_AUTHENTICATION_HEADER'] = 'Authorization'
app.config['SECURITY_PASSWORD_HASH'] = 'bcrypt'

# Initialize extensions
db.init_app(app)
migrate = Migrate(app, db)
security = Security(app, user_datastore)

# Register your API blueprint here
from server.routes.api_routes import api_bp  # Import API routes blueprint
app.register_blueprint(api_bp, url_prefix='/api')  # Set '/api' as the prefix for all API routes

# Routes
@app.route('/')
def home():
    return 'Flask Security + MySQL setup complete!'

# Run the app
if __name__ == '__main__':
    app.run(debug=True, port=5000)
