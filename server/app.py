from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate
from flask_security import Security, SQLAlchemyUserDatastore
from models import db, User, Role  # your models
from flask_cors import CORS
CORS(app, supports_credentials=True)


app = Flask(__name__)

# CONFIG
app.config['DEBUG'] = True
app.config['SECRET_KEY'] = 'your-secret-key'
app.config['SQLALCHEMY_DATABASE_URI'] = 'mysql+pymysql://root:@localhost:3306/auralis_db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

# Flask-Security config
app.config['SECURITY_PASSWORD_SALT'] = 'your-salt'
app.config['SECURITY_REGISTERABLE'] = True
app.config['SECURITY_SEND_REGISTER_EMAIL'] = False
app.config['SECURITY_TOKEN_AUTHENTICATION_HEADER'] = 'Authorization'
app.config['SECURITY_PASSWORD_HASH'] = 'bcrypt'

# Initialize extensions
migrate = Migrate(app, db)
db.init_app(app)

# Flask-Security setup
from models import user_datastore
security = Security(app, user_datastore)

# ROUTES
@app.route('/')
def home():
    return 'Flask Security + MySQL setup complete!'

if __name__ == '__main__':
    app.run(debug=True, port=5000)
