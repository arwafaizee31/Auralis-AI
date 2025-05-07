# server/routes/api_routes.py

from flask import Blueprint, jsonify
from server.models import Genre, Tempo , Mood
from server import db  # Now it will work if db is initialized before this import

api_bp = Blueprint('api', __name__)

@api_bp.route('/genres', methods=['GET'])
def get_genres():
    genres = Genre.query.all()
    return jsonify([{'name': genre.name} for genre in genres])

@api_bp.route('/tempo', methods=['GET'])
def get_tempo():
    tempos = Tempo.query.all()
    return jsonify([{'name': tempo.name} for tempo in tempos])

@api_bp.route('/mood', methods=['GET'])
def get_mood():
    moods = Mood.query.all()
    return jsonify([{'name': mood.name} for mood in moods])
