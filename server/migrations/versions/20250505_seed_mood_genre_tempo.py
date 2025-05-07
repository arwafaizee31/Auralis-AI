from alembic import op
import sqlalchemy as sa

# revision identifiers, used by Alembic.
revision = '20250505_seed_mood_genre_tempo'
down_revision = '8a765895e636'
branch_labels = None
depends_on = None

def upgrade():
    # Insert moods
    moods = [
        "Energetic", "Fun", "Heartfelt", "Reflective", "Intense", "Uplifting", "Melancholic", "Dreamy",
        "Romantic", "Aggressive", "Wild", "Raw", "Dramatic", "Relaxed", "Groovy", "Epic", "Happy", "Hopeful",
        "Laid Back", "Angry", "Sentimental", "Busy & Frantic", "Funny & Weird", "Dark", "Glamorous",
        "Mysterious", "Elegant", "Euphoric", "Fear", "Heavy & Ponderous", "Peaceful", "Restless", "Running",
        "Sad", "Scary", "Sexy", "Smooth", "Suspense"
    ]
    for mood in moods:
        op.execute(f"INSERT INTO mood (name) VALUES ('{mood}')")

    # Insert tempos
    tempos = ["Slow", "Medium", "Fast"]
    for tempo in tempos:
        op.execute(f"INSERT INTO tempo (name) VALUES ('{tempo}')")

    # Insert genres
    genres = [
        "Hip Hop", "Trap", "Drill", "R&B", "Jersey Club", "Latin", "Acoustic", "Rock", "Ambient", "Beats",
        "Drum n Bass", "Electro & Dance", "Funk", "House", "Techno & Trance", "City Pop", "Pop", "Lofi Hip Hop",
        "World", "Country", "Electronica", "Orchestra", "Tropical House", "Afrobeats", "Reggaeton", "Phonk",
        "Christmas", "Reggae", "UK Garage", "Sexy Drill", "Dancehall" ,"Jazz" , "Blues" , "Western Classical" , "Indian Classical"
    ]
    for genre in genres:
        op.execute(f"INSERT INTO genre (name) VALUES ('{genre}')")

def downgrade():
    op.execute("DELETE FROM mood")
    op.execute("DELETE FROM tempo")
    op.execute("DELETE FROM genre")
