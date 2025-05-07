import React, { useEffect , useState } from "react";
import axios from 'axios';
import DurationSlider from '../components/DurationSlider'; // adjust the path as needed

const GenerateMusic = () => {
  const [genres, setGenres] = useState([]);
  const [moods, setMoods] = useState([]);
  const [tempos, setTempos] = useState([]);
  const [formData, setFormData] = useState({
    genre: "",
    mood: "",
    tempo: "",
    duration: 1,
  });
  useEffect(() => {
    axios.get('http://127.0.0.1:5000/api/genres')
      .then(res => {
        setGenres(res.data);
      })
      .catch(err => {
        console.error("Error fetching genres:", err);
      });
  }, []);
  useEffect(() => {
    axios.get('http://127.0.0.1:5000/api/mood')
      .then(res => {
        setMoods(res.data);
      })
      .catch(err => {
        console.error("Error fetching moods:", err);
      });
  }, []);
  useEffect(() => {
    axios.get('http://127.0.0.1:5000/api/tempo')
      .then(res => {
        setTempos(res.data);
      })
      .catch(err => {
        console.error("Error fetching tempos:", err);
      });
  }, []);
  const [audioUrl, setAudioUrl] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setAudioUrl(null);
    console.log("Submitting form data:", formData);
    try {
      const response = await fetch("https://058e-34-70-125-206.ngrok-free.app/generate-music", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
  
      if (!response.ok) {
        // Try to read the error message from the response (assuming it's text or JSON)
        const errorText = await response.text(); // or use .json() if your API sends JSON errors
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

  return (
    <div style={{ padding: "20px", fontFamily: "sans-serif" }}>
      <h2>Music Generator</h2>
      <form onSubmit={handleSubmit}>
      <select
      name="genre"
      value={formData.genre}
      onChange={handleChange}
      required
    >
      <option value="">Select Genre</option>
      {genres.map((genre) => (
        <option key={genre.name} value={genre.name}>
          {genre.name}
        </option>
      ))}
    </select><br /><br />
    <select
      name="mood"
      value={formData.mood}
      onChange={handleChange}
      required
    >
      <option value="">Select Mood</option>
      {moods.map((mood) => (
        <option key={mood.name} value={mood.name}>
          {mood.name}
        </option>
      ))}
    </select><br /><br />
    <select
      name="tempo"
      value={formData.tempo}
      onChange={handleChange}
      required
    >
      <option value="">Select Tempo</option>
      {tempos.map((tempo) => (
        <option key={tempo.name} value={tempo.name}>
          {tempo.name}
        </option>
      ))}
    </select><br /><br />
    <DurationSlider
  value={formData.duration}
  onChange={(newDuration) =>
    setFormData({ ...formData, duration: newDuration })
  }
  min={1}
  max={1000}
  step={1}
/><br /><br />
        <button type="submit" disabled={loading}>
          {loading ? "Generating..." : "Generate Music"}
        </button>
      </form>

      {audioUrl && (
        <div style={{ marginTop: "20px" }}>
          <h3>Generated Music:</h3>
          <audio controls src={audioUrl}></audio>
        </div>
      )}
    </div>
  );
};

export default GenerateMusic;
