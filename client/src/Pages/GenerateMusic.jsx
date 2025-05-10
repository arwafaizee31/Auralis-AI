import React, { useEffect, useState } from "react";
import axios from 'axios';
import DurationSlider from '../components/DurationSlider';
import SelectableCardGrid from '../components/SelectableCardGrid';
import TempoSelector from '../components/TempoSelector';
import '../styles/main.css';

const GenerateMusic = () => {
  const [genres, setGenres] = useState([]);
  const [moods, setMoods] = useState([]);
  const [selectedGenres, setSelectedGenres] = useState([]);
  const [selectedMoods, setSelectedMoods] = useState([]);
  const [formData, setFormData] = useState({
    genre: "",
    mood: "",
    tempo: "",
    duration: 30, // 30 seconds default
  });
  const [audioUrl, setAudioUrl] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    axios.get('http://127.0.0.1:5000/api/genres')
      .then(res => setGenres(res.data))
      .catch(err => console.error("Error fetching genres:", err));

    axios.get('http://127.0.0.1:5000/api/mood')
      .then(res => setMoods(res.data))
      .catch(err => console.error("Error fetching moods:", err));
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setAudioUrl(null);

    const payload = {
      ...formData,
      genre: selectedGenres.join(", "),
      mood: selectedMoods.join(", "),
    };
     console.log(payload);

    try {
      const response = await fetch("https://715b-34-9-162-185.ngrok-free.app/generate-music", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        const errorText = await response.text();
        console.error("API Error Response:", errorText);
        throw new Error(`Server responded with ${response.status}`);
      }

      const blob = await response.blob();
      const url = URL.createObjectURL(blob);
      setAudioUrl(url);
    } catch (err) {
      console.error("Error generating music:", err);
      alert("Failed to generate music. Check console for details.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (!audioUrl) return;

    const canvas = document.getElementById("waveform");
    const ctx = canvas.getContext("2d");
    const drawWaveform = async () => {
      const response = await fetch(audioUrl);
      const arrayBuffer = await response.arrayBuffer();
      const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
      const audioBuffer = await audioCtx.decodeAudioData(arrayBuffer);

      const rawData = audioBuffer.getChannelData(0);
      const samples = 600;
      const blockSize = Math.floor(rawData.length / samples);
      const filteredData = new Array(samples).fill(0);

      for (let i = 0; i < samples; i++) {
        let blockStart = i * blockSize;
        let sum = 0;
        for (let j = 0; j < blockSize; j++) {
          sum += Math.abs(rawData[blockStart + j]);
        }
        filteredData[i] = sum / blockSize;
      }

      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = "#00ffff";
      const height = canvas.height;
      filteredData.forEach((val, i) => {
        const y = val * height;
        ctx.fillRect(i, height - y, 1, y);
      });
    };

    drawWaveform();
  }, [audioUrl]);

  return (
    <div style={{ padding: "5rem", fontFamily: "sans-serif" }}>
      <form onSubmit={handleSubmit}>
        <div style={{ display: 'flex', gap: '3rem', marginBottom: '2rem', alignItems: 'center' }}>
          <div>
            <label style={{ fontWeight: 'bold' }}>Choose the length</label>
            <DurationSlider
              value={formData.duration}
              onChange={(newDuration) =>
                setFormData({ ...formData, duration: newDuration })
              }
              min={1}
              max={30}
              step={1}
            />
          </div>

          <div>
            <label style={{ fontWeight: 'bold' }}>Select Tempo</label>
            <TempoSelector
              selectedTempo={formData.tempo}
              onTempoChange={(tempo) => setFormData({ ...formData, tempo })}
            />
          </div>

          <button className="gen-btn" type="submit" disabled={loading}>
            {loading ? "Generating..." : "Generate Music"}
          </button>
        </div>

        {audioUrl && (
          <div style={{ marginTop: "20px" }}>
            <h3>Generated Music:</h3>
            <canvas id="waveform" width="600" height="100" style={{ background: '#1e1e2f', width: '100%' }}></canvas>
            <audio controls src={audioUrl} id="audioPlayer"></audio>
          </div>
        )}

        <br /><br /><br /><br />
        <h1>Select the Genre</h1>
        <br />
        <SelectableCardGrid
          apiEndpoint="/api/genres"
          type="genres"
          onSelectionChange={setSelectedGenres}
        />

        <br /><br /><br /><br />
        <h1>Select the Mood</h1>
        <br />
        <SelectableCardGrid
          apiEndpoint="/api/mood"
          type="moods"
          onSelectionChange={setSelectedMoods}
        />
        <br /><br />
      </form>
    </div>
  );
};

export default GenerateMusic;
