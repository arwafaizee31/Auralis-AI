import React, { useState } from "react";

const GenerateMusic = () => {
  const [formData, setFormData] = useState({
    genre: "",
    mood: "",
    tempo: "",
    duration: 1,
  });

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

    try {
      const response = await fetch("https://b64f-34-86-162-236.ngrok-free.app/generate-music", {
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
        <input
          name="genre"
          placeholder="Genre (e.g., Ambient)"
          value={formData.genre}
          onChange={handleChange}
          required
        /><br /><br />
        <input
          name="mood"
          placeholder="Mood (e.g., Calm)"
          value={formData.mood}
          onChange={handleChange}
          required
        /><br /><br />
        <input
          name="tempo"
          placeholder="Tempo (e.g., Slow)"
          value={formData.tempo}
          onChange={handleChange}
          required
        /><br /><br />
        <input
          name="duration"
          type="number"
          placeholder="Duration (in minutes)"
          value={formData.duration}
          onChange={handleChange}
          min="1"
          required
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
