from flask import Flask, request, jsonify
from flask_cors import CORS
from audiocraft.models import MusicGen
from openai import AzureOpenAI
from dotenv import load_dotenv
import torch
import torchaudio
import os

# Load environment variables
load_dotenv()

app = Flask(__name__)
CORS(app, supports_credentials=True)

# CONFIG
app.config['DEBUG'] = True
app.config['SECRET_KEY'] = 'your-secret-key'

# Azure OpenAI config
client = AzureOpenAI(
    azure_endpoint=os.getenv("AZURE_OPENAI_ENDPOINT"),
    api_key=os.getenv("AZURE_OPENAI_API_KEY"),
    api_version=os.getenv("AZURE_OPENAI_API_VERSION"),
)
AZURE_DEPLOYMENT_NAME = os.getenv("AZURE_OPENAI_CHAT_DEPLOYMENT_NAME_GPT_4")

# Load MusicGen once
music_model = MusicGen.get_pretrained("facebook/musicgen-small")


def enhance_prompt(base_prompt):
    system_prompt = (
        "You are a helpful assistant that improves prompts for text-to-music generation. "
        "Given a basic user prompt, enhance it using specific, accurate musical terminology. "
        "Describe the music's flow, the instruments, their playstyle, and overall mood. "
        "Keep it creative but concise. DO NOT add imaginary details not requested by the user. "
        "Respond ONLY with the improved prompt, nothing else."
    )

    user_prompt = f"ORIGINAL PROMPT: {base_prompt}\nENHANCED PROMPT:"

    messages = [
        {"role": "system", "content": system_prompt},
        {"role": "user", "content": user_prompt}
    ]

    response = client.chat.completions.create(
        model=AZURE_DEPLOYMENT_NAME,
        messages=messages,
        temperature=0.5,
        max_tokens=1000,
        top_p=0.95
    )

    return response.choices[0].message.content.strip()


def generate_music(description, duration):
    music_model.set_generation_params(
        use_sampling=True,
        top_k=250,
        duration=duration
    )

    output = music_model.generate(
        descriptions=[description],
        progress=True,
        return_tokens=True
    )

    return output[0]


def save_audio(samples: torch.Tensor):
    sample_rate = 32000
    save_path = "saved_audio/"
    os.makedirs(save_path, exist_ok=True)

    samples = samples.detach().cpu()
    if samples.dim() == 2:
        samples = samples[None, ...]

    audio_path = os.path.join(save_path, "audio_0.wav")
    torchaudio.save(audio_path, samples[0], sample_rate)

    return audio_path


@app.route('/')
def home():
    return '🎶 Auralis AI Backend Running 🎶'


@app.route('/generate-music', methods=['POST'])
def generate_music_api():
    data = request.get_json()
    genre = data.get("genre", "").strip()
    mood = data.get("mood", "").strip()
    tempo = data.get("tempo", "").strip()
    duration = int(data.get("duration", 5))

    if not genre or not mood or not tempo:
        return jsonify({"error": "Genre, mood, and tempo are required"}), 400

    base_prompt = f"Genre: {genre}. Mood: {mood}. Tempo: {tempo}."
    enhanced_prompt = enhance_prompt(base_prompt)
    samples = generate_music(enhanced_prompt, duration)
    audio_path = save_audio(samples)

    return jsonify({
        "base_prompt": base_prompt,
        "enhanced_prompt": enhanced_prompt,
        "audio_path": audio_path
    })


if __name__ == '__main__':
    app.run(debug=True, port=5000)
