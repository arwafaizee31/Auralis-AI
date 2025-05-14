import React, { useState, useEffect, useRef } from "react";
import "../styles/SampleMusic.css";

const genres = ["Indian Classical", "Rock", "Pop", "Jazz", "Blues"];

const sampleData = {
  "Indian Classical": [
    {
      id: 1,
      title: "Sample 1",
      mood: "Calm, Meditative",
      duration: "6:45",
      bpm: "80 BPM",
      key: "C",
      genre: "Indian Classical",
      audioSrc: "/audio/ambient.mp3",
      imageSrc: "/images/indian1.jpg",
    },
    {
      id: 2,
      title: "Sample 2",
      mood: "Peaceful, Uplifting",
      duration: "5:30",
      bpm: "85 BPM",
      key: "F",
      genre: "Indian Classical",
      audioSrc: "/audio/raag2.mp3",
      imageSrc: "/images/indian2.jpg",
    },
    {
      id: 3,
      title: "Sample 3",
      mood: "Peaceful, Uplifting",
      duration: "5:30",
      bpm: "85 BPM",
      key: "F",
      genre: "Indian Classical",
      audioSrc: "/audio/raag2.mp3",
      imageSrc: "/images/indian3.jpg",
    },
    {
      id: 4,
      title: "Sample 4",
      mood: "Peaceful, Uplifting",
      duration: "5:30",
      bpm: "85 BPM",
      key: "F",
      genre: "Indian Classical",
      audioSrc: "/audio/raag2.mp3",
      imageSrc: "/images/indian4.jpg",
    },
    {
      id: 5,
      title: "Sample 5",
      mood: "Peaceful, Uplifting",
      duration: "5:30",
      bpm: "85 BPM",
      key: "F",
      genre: "Indian Classical",
      audioSrc: "/audio/raag2.mp3",
      imageSrc: "/images/indian5.jpg",
    },
  
  ],
  Rock: [
    {
      id: 6,
      title: "Sample 1",
      mood: "Energetic, Powerful",
      duration: "3:15",
      bpm: "140 BPM",
      key: "E",
      genre: "Rock",
      audioSrc: "/audio/rock1.mp3",
      imageSrc: "/images/rock1.jpg",
    },
    {
      id: 7,
      title: "Sample 2",
      mood: "Energetic, Powerful",
      duration: "3:15",
      bpm: "140 BPM",
      key: "E",
      genre: "Rock",
      audioSrc: "/audio/rock1.mp3",
      imageSrc: "/images/rock2.jpg",
    },
    {
      id: 8,
      title: "Sample 3",
      mood: "Energetic, Powerful",
      duration: "3:15",
      bpm: "140 BPM",
      key: "E",
      genre: "Rock",
      audioSrc: "/audio/rock1.mp3",
      imageSrc: "/images/rock3.jpg",
    },
    {
      id: 9,
      title: "Sample 4",
      mood: "Energetic, Powerful",
      duration: "3:15",
      bpm: "140 BPM",
      key: "E",
      genre: "Rock",
      audioSrc: "/audio/rock1.mp3",
      imageSrc: "/images/rock4.jpg",
    },
    {
      id: 10,
      title: "Sample 5",
      mood: "Energetic, Powerful",
      duration: "3:15",
      bpm: "140 BPM",
      key: "E",
      genre: "Rock",
      audioSrc: "/audio/rock1.mp3",
      imageSrc: "/images/rock5.jpg",
    },
    // ...add 4 more
  ],
  Pop: [
    {
      id: 1,
      title: "Sample 1",
      mood: "Bright, Happy",
      duration: "3:45",
      bpm: "120 BPM",
      key: "G",
      genre: "Pop",
      audioSrc: "/audio/pop1.mp3",
      imageSrc: "/images/pop1.jpg",
    },
    {
      id: 2,
      title: "Sample 2",
      mood: "Bright, Happy",
      duration: "3:45",
      bpm: "120 BPM",
      key: "G",
      genre: "Pop",
      audioSrc: "/audio/pop1.mp3",
      imageSrc: "/images/pop2.jpg",
    },
    {
      id: 3,
      title: "Sample 3",
      mood: "Bright, Happy",
      duration: "3:45",
      bpm: "120 BPM",
      key: "G",
      genre: "Pop",
      audioSrc: "/audio/pop1.mp3",
      imageSrc: "/images/pop3.jpg",
    },
    {
      id: 4,
      title: "Sample 4",
      mood: "Bright, Happy",
      duration: "3:45",
      bpm: "120 BPM",
      key: "G",
      genre: "Pop",
      audioSrc: "/audio/pop1.mp3",
      imageSrc: "/images/pop4.jpg",
    },
    {
      id: 5,
      title: "Sample 5",
      mood: "Bright, Happy",
      duration: "3:45",
      bpm: "120 BPM",
      key: "G",
      genre: "Pop",
      audioSrc: "/audio/pop1.mp3",
      imageSrc: "/images/pop5.jpg",
    },
    // ...add more
  ],
  Jazz: [
    {
      id: 1,
      title: "Sample 1",
      mood: "Chill, Classy",
      duration: "4:20",
      bpm: "100 BPM",
      key: "Bb",
      genre: "Jazz",
      audioSrc: "/audio/jazz1.mp3",
      imageSrc: "/images/jazz1.jpg",
    },
    {
      id: 2,
      title: "Sample 2",
      mood: "Chill, Classy",
      duration: "4:20",
      bpm: "100 BPM",
      key: "Bb",
      genre: "Jazz",
      audioSrc: "/audio/jazz1.mp3",
      imageSrc: "/images/jazz2.jpg",
    },
    {
      id: 3,
      title: "Sample 3",
      mood: "Chill, Classy",
      duration: "4:20",
      bpm: "100 BPM",
      key: "Bb",
      genre: "Jazz",
      audioSrc: "/audio/jazz1.mp3",
      imageSrc: "/images/jazz3.jpg",
    },
    {
      id: 4,
      title: "Sample 4",
      mood: "Chill, Classy",
      duration: "4:20",
      bpm: "100 BPM",
      key: "Bb",
      genre: "Jazz",
      audioSrc: "/audio/jazz1.mp3",
      imageSrc: "/images/jazz4.jpg",
    },
    {
      id: 5,
      title: "Sample 5",
      mood: "Chill, Classy",
      duration: "4:20",
      bpm: "100 BPM",
      key: "Bb",
      genre: "Jazz",
      audioSrc: "/audio/jazz1.mp3",
      imageSrc: "/images/jazz5.jpg",
    },
    // ...add more
  ],
  Blues: [
    {
      id: 1,
      title: "Sample 1",
      mood: "Melancholic, Soulful",
      duration: "5:00",
      bpm: "90 BPM",
      key: "A",
      genre: "Blues",
      audioSrc: "/audio/blues1.mp3",
      imageSrc: "/images/blues3.jpg",
    },
    {
      id: 2,
      title: "Sample 2",
      mood: "Melancholic, Soulful",
      duration: "5:00",
      bpm: "90 BPM",
      key: "A",
      genre: "Blues",
      audioSrc: "/audio/blues1.mp3",
      imageSrc: "/images/blues2.jpg",
    },
    {
      id: 3,
      title: "Sample 3",
      mood: "Melancholic, Soulful",
      duration: "5:00",
      bpm: "90 BPM",
      key: "A",
      genre: "Blues",
      audioSrc: "/audio/blues1.mp3",
      imageSrc: "/images/blues1.jpg",
    },
    {
      id: 4,
      title: "Sample 4",
      mood: "Melancholic, Soulful",
      duration: "5:00",
      bpm: "90 BPM",
      key: "A",
      genre: "Blues",
      audioSrc: "/audio/blues1.mp3",
      imageSrc: "/images/blues4.jpg",
    },
    {
      id: 5,
      title: "Sample 5",
      mood: "Melancholic, Soulful",
      duration: "5:00",
      bpm: "90 BPM",
      key: "A",
      genre: "Blues",
      audioSrc: "/audio/blues1.mp3",
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
