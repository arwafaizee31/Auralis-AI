import React, { useEffect , useState } from "react";
import axios from 'axios';
import DurationSlider from '../components/DurationSlider'; // adjust the path as needed
import SelectableCardGrid from '../components/SelectableCardGrid';
import TempoSelector from '../components/TempoSelector'; // adjust path if needed

const GenerateMusic = () => {
  const [genres, setGenres] = useState([]);
  const [moods, setMoods] = useState([]);

  const [selectedGenres, setSelectedGenres] = useState([]);
  const [selectedMoods, setSelectedMoods] = useState([]);
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
   
      const payload = {
        ...formData,
        genre: selectedGenres.join(", "),
  mood: selectedMoods.join(", "),
      };
      
   
  
    console.log("Submitting form data:", payload);
    console.log("Genres:", selectedGenres);
    console.log("Moods:", selectedMoods);
    try {
      const response = await fetch("https://aa2d-34-138-183-227.ngrok-free.app/generate-music", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
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
return(
  <div style={{ padding: "20px", fontFamily: "sans-serif" }}>
    <h2>Music Generator</h2>
    <form onSubmit={handleSubmit}>
    
      {/* Duration and Tempo side by side */}
      <div style={{ display: 'flex', gap: '2rem', marginBottom: '2rem', alignItems: 'center' }}>
        <DurationSlider
          value={formData.duration}
          onChange={(newDuration) =>
            setFormData({ ...formData, duration: newDuration })
          }
          min={1}
          max={1000}
          step={1}
        />
        <div>
          <label style={{ fontWeight: 'bold' }}>Select Tempo</label>
          <TempoSelector
  selectedTempo={formData.tempo}
  onTempoChange={(tempo) => setFormData({ ...formData, tempo })}
/>
        </div>
        <button type="submit" disabled={loading}>
        {loading ? "Generating..." : "Generate Music"}
      </button>
      </div>

      {/* Genre Selection */}
      <h2>Select Genre</h2>
      <SelectableCardGrid
        apiEndpoint="/api/genres"
        type="genres"
        onSelectionChange={setSelectedGenres}
      />

      {/* Mood Selection */}
      <h2>Select Mood</h2>
      <SelectableCardGrid
        apiEndpoint="/api/mood"
        type="moods"
        onSelectionChange={setSelectedMoods}
      />

      <br /><br />
      
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
