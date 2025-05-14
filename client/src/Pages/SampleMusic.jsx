import React, { useState, useEffect, useRef } from "react";
import "../styles/SampleMusic.css";

const genres = ["Indian Classical", "Rock", "Pop", "Jazz", "Blues"];

const sampleData = {
  "Indian Classical": [
    {
      id: 1,
      title: "Sample 1",
      mood: "Peaceful, Uplifting",
      bpm: "Medium",
      genre: "Indian Classical",
      audioSrc: "/audio/indian-classical-1.mp3",
      imageSrc: "/images/indian1.jpg",
    },
    {
      id: 2,
      title: "Sample 2",
      mood: "Peaceful, Melancholic",
      bpm: "Slow",
      genre: "Indian Classical",
      audioSrc: "/audio/indian-classical-2.mp3",
      imageSrc: "/images/indian2.jpg",
    },
    {
      id: 3,
      title: "Sample 3",
      mood: "Peaceful, Calm",  
      bpm: "Slow",
      genre: "Indian Classical",
      audioSrc: "/audio/indian-classical-3.mp3",
      imageSrc: "/images/indian3.jpg",
    },
    {
      id: 4,
      title: "Sample 4",
      mood: "Energetic, Uplifting",
      bpm: "Fast",
      genre: "Indian Classical",
      audioSrc: "/audio/indian-classical-4.mp3",
      imageSrc: "/images/indian4.jpg",
    },
    {
      id: 5,
      title: "Sample 5",
      mood: "Melancholic",
      bpm: "Slow",
      genre: "Indian Classical",
      audioSrc: "/audio/indian-classical-5.mp3",
      imageSrc: "/images/indian5.jpg",
    },
  
  ],
  Rock: [
    {
      id: 6,
      title: "Sample 1",
      mood: "Energetic, Powerful",
      bpm: "Fast",
      genre: "Rock",
      audioSrc: "/audio/rock-1.mp3",
      imageSrc: "/images/rock1.jpg",
    },
    {
      id: 7,
      title: "Sample 2",
      mood: "Powerful",
      bpm: "Medium",
      genre: "Rock",
      audioSrc: "/audio/rock-2.mp3",
      imageSrc: "/images/rock2.jpg",
    },
    {
      id: 8,
      title: "Sample 3",
      mood: "Energetic, Angry",
      bpm: "Fast",
      genre: "Rock",
      audioSrc: "/audio/rock-3.mp3",
      imageSrc: "/images/rock3.jpg",
    },
    {
      id: 9,
      title: "Sample 4",
      mood: "Energetic, Powerful",
      bpm: "Fast",
      genre: "Rock",
      audioSrc: "/audio/rock-4.mp3",
      imageSrc: "/images/rock4.jpg",
    },
    {
      id: 10,
      title: "Sample 5",
      mood: "Aggresive, Powerful",
      bpm: "Medium",
      genre: "Rock",
      audioSrc: "/audio/rock-5.mp3",
      imageSrc: "/images/rock5.jpg",
    },
    // ...add 4 more
  ],
  Pop: [
    {
      id: 1,
      title: "Sample 1",
      mood: "Bright, Happy",
      bpm: "Medium",
      genre: "Pop",
      audioSrc: "/audio/pop-1.mp3",
      imageSrc: "/images/pop1.jpg",
    },
    {
      id: 2,
      title: "Sample 2",
      mood: "Christmas",
      bpm: "Fast",
      genre: "Pop",
      audioSrc: "/audio/pop-2.mp3",
      imageSrc: "/images/pop2.jpg",
    },
    {
      id: 3,
      title: "Sample 3",
      mood: "Groovy",
      bpm: "Medium",
      genre: "Pop",
      audioSrc: "/audio/pop-3.mp3",
      imageSrc: "/images/pop3.jpg",
    },
    {
      id: 4,
      title: "Sample 4",
      mood: "Bright, Dreamy",
      bpm: "Fast",
      genre: "Pop",
      audioSrc: "/audio/pop-4.mp3",
      imageSrc: "/images/pop4.jpg",
    },
    {
      id: 5,
      title: "Sample 5",
      mood: "Groovy,Powerful",
      bpm: "Medium",
      genre: "Pop",
      audioSrc: "/audio/pop-5.mp3",
      imageSrc: "/images/pop5.jpg",
    },
    // ...add more
  ],
  Jazz: [
    {
      id: 1,
      title: "Smooth Jazz Nights",
      mood: "Energetic, Powerful",
      bpm: "Medium",
      genre: "Jazz",
      audioSrc: "/audio/jazz-1.mp3",
      imageSrc: "/images/jazz1.jpg",
    },
    {
      id: 2,
      title: "Smooth Jazz Nights",
      mood: "Energetic, Groovy",
      bpm: "Fast",
      genre: "Jazz",
      audioSrc: "/audio/jazz-2.mp3",
      imageSrc: "/images/jazz2.jpg",
    },
    {
      id: 3,
      title: "Smooth Jazz Nights",
      mood: " Classy",
      bpm: "Fast",
      genre: "Jazz",
      audioSrc: "/audio/jazz-3.mp3",
      imageSrc: "/images/jazz3.jpg",
    },
    {
      id: 4,
      title: "Smooth Jazz Nights",
      mood: "Romantic, Classy",
      bpm: "Slow",
      genre: "Jazz",
      audioSrc: "/audio/jazz-4.mp3",
      imageSrc: "/images/jazz4.jpg",
    },
    {
      id: 5,
      title: "Smooth Jazz Nights",
      mood: "Chill, Happy",
      bpm: "Fast",
      genre: "Jazz",
      audioSrc: "/audio/jazz-5.mp3",
      imageSrc: "/images/jazz5.jpg",
    },
    // ...add more
  ],
  Blues: [
    {
      id: 1,
      title: "Sample 1",
      mood: "Bright, Soulful",
      bpm: "Slow",
      genre: "Blues",
      audioSrc: "/audio/blues-1.mp3",
      imageSrc: "/images/blues3.jpg",
    },
    {
      id: 2,
      title: "Sample 2",
      mood: "Epic",
      bpm: "Fast",
      genre: "Blues",
      audioSrc: "/audio/blues-2.mp3",
      imageSrc: "/images/blues2.jpg",
    },
    {
      id: 3,
      title: "Sample 3",
      mood: "Laid-back",
      bpm: "Slow",
      genre: "Blues",
      audioSrc: "/audio/blues-3.mp3",
      imageSrc: "/images/blues1.jpg",
    },
    {
      id: 4,
      title: "Sample 4",
      mood: "Uplifting",
      bpm: "Fast",
      genre: "Blues",
      audioSrc: "/audio/blues-4.mp3",
      imageSrc: "/images/blues4.jpg",
    },
    {
      id: 5,
      title: "Sample 5",
      mood: "Relaxed",
      bpm: "Medium",
      genre: "Blues",
      audioSrc: "/audio/blues-5.mp3",
      imageSrc: "/images/blues5.jpg",
    },
    // ...add more
  ],
};


function SampleMusic() {
  const [activeGenre, setActiveGenre] = useState(genres[0]);
  const audioRefs = useRef({});
  const lineRefs = useRef({});

  useEffect(() => {
    const currentAudios = audioRefs.current;
    const currentLines = lineRefs.current;
  
    const updateProgress = (id) => {
      const audio = currentAudios[id];
      const line = currentLines[id];
  
      if (audio && line) {
        const progressDiv = line.querySelector('.waveform-progress');
        if (progressDiv && audio.duration) {
          const percent = (audio.currentTime / audio.duration) * 100;
          progressDiv.style.width = `${percent}%`;
        }
      }
    };
  
    const setupListeners = (id) => {
      const audio = currentAudios[id];
      if (audio) {
        const handler = () => updateProgress(id);
        audio.addEventListener("timeupdate", handler);
        audio.addEventListener("ended", () => updateProgress(id));
        audio._handler = handler; // store for cleanup
      }
    };
  
    Object.keys(currentAudios).forEach(setupListeners);
  
    return () => {
      Object.keys(currentAudios).forEach((id) => {
        const audio = currentAudios[id];
        if (audio && audio._handler) {
          audio.removeEventListener("timeupdate", audio._handler);
        }
      });
    };
  }, [activeGenre]);
  

  return (
  
   <div className="container">
    <div className="sample-music">

      <h1 className="sample-title">Sample Music</h1>
    <br /> <br />
      <div className="pill-tabs">
        {genres.map((genre) => (
          <button
            key={genre}
            className={`pill-tab ${activeGenre === genre ? "active" : ""}`}
            onClick={() => setActiveGenre(genre)}
          >
            {genre}
          </button>
        ))}
      </div>

      <div className="horizontal-list">
        {sampleData[activeGenre].map((track) => (
          <div className="music-card" key={track.id}>
            <img
              src={track.imageSrc}
              alt={track.title}
              className="music-thumb"
            />
            <div className="music-info">
              <div className="music-meta">
                <h3>{track.title}</h3>
                <span>{track.genre}</span>
              </div>
              <div className="music-tags">
                <span>{track.mood}</span>
                <span>{track.key}</span>
                <span>{track.bpm}</span>
                <span>{track.duration}</span>
              </div>
              <div
                className="waveform-placeholder"
                ref={(el) =>
                  (lineRefs.current[`${track.genre}-${track.id}`] = el)
                }
              >
                <div className="waveform-progress" />
              </div>
            </div>
            <div className="music-actions">
              <audio
                ref={(el) =>
                  (audioRefs.current[`${track.genre}-${track.id}`] = el)
                }
                controls
                src={track.audioSrc}
              />
              
            
            </div>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
}

export default SampleMusic;
