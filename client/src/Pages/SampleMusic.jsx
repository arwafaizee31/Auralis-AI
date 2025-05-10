// SampleMusicPage.jsx
import React, { useState, useRef, useEffect } from 'react';
import WaveSurfer from 'wavesurfer.js';

const GENRES = ['Techno', 'Christmas', 'Hip Hop', 'Ambient', 'Latin'];

const songs = {
  Techno: [
    {
      id: '001',
      title: 'Techno Beats',
      genre: 'Techno & Trance',
      mood: 'Hopeful',
      tempo: '134 BPM',
      key: 'F#m',
      duration: '3:01',
      file: '/audio/techno.mp3',
      image: '/images/techno.jpg',
    },
  ],
  Christmas: [
    {
      id: '002',
      title: 'Christmas Orchestra',
      genre: 'Christmas × Orchestral',
      mood: 'Hopeful',
      tempo: '90 BPM',
      key: 'F',
      duration: '3:03',
      file: '/audio/christmas.mp3',
      image: '/images/christmas.jpg',
    },
  ],
  'Hip Hop': [
    {
      id: '003',
      title: 'Urban Pop Vibes',
      genre: 'Hip Hop × Pop',
      mood: 'Hopeful',
      tempo: '140 BPM',
      key: 'D',
      duration: '3:00',
      file: '/audio/hiphop.mp3',
      image: '/images/hiphop.jpg',
    },
  ],
  Ambient: [
    {
      id: '005',
      title: 'Dream Space',
      genre: 'Electronica × Ambient',
      mood: 'Hopeful',
      tempo: '110 BPM',
      key: 'Bm',
      duration: '2:56',
      file: '/audio/ambient.mp3',
      image: '/images/ambient.jpg',
    },
  ],
  Latin: [
    {
      id: '006',
      title: 'Latin Chill',
      genre: 'Beats × Latin',
      mood: 'Hopeful',
      tempo: '80 BPM',
      key: 'G',
      duration: '3:02',
      file: '/audio/latin.mp3',
      image: '/images/latin.jpg',
    },
  ],
};

const AudioPlayer = ({ src }) => {
  const waveformRef = useRef(null);
  const wavesurfer = useRef(null);

  useEffect(() => {
    if (!src || !waveformRef.current) return;
  
    let isMounted = true;
  
    // Clean up any existing wavesurfer
    if (wavesurfer.current) {
      try {
        wavesurfer.current.destroy();
      } catch (err) {
        console.warn('WaveSurfer destroy failed:', err);
      }
    }
  
    // Create WaveSurfer instance
    wavesurfer.current = WaveSurfer.create({
      container: waveformRef.current,
      waveColor: '#ccc',
      progressColor: '#1DB954',
      height: 60,
      responsive: true,
    });
  
    // Load audio
    try {
      wavesurfer.current.load(src);
    } catch (e) {
      if (e.name !== 'AbortError') console.error('WaveSurfer load error:', e);
    }
  
    // Cleanup
    return () => {
      if (isMounted) {
        try {
          wavesurfer.current.destroy();
          wavesurfer.current = null;
        } catch (err) {
          console.warn('WaveSurfer cleanup failed:', err);
        }
      }
    };
  }, [src]); // Only run this effect when the src changes
  

  return <div ref={waveformRef} />;
};


const SongCard = ({ song }) => {
  return (
    <div className="bg-gray-900 text-white p-4 rounded-lg shadow flex gap-4">
      <img src={song.image} alt={song.title} className="w-24 h-24 object-cover rounded" />
      <div className="flex flex-col flex-grow">
        <h3 className="text-xl font-semibold">
          {song.id} — {song.title}
        </h3>
        <p className="text-sm text-gray-400">{song.genre}</p>
        <p className="text-sm">Mood: {song.mood}</p>
        <p className="text-sm">
          Key: {song.key} | Tempo: {song.tempo} | Duration: {song.duration}
        </p>
        <AudioPlayer src={song.file} />
      </div>
    </div>
  );
};

const SampleMusic = () => {
  const [activeTab, setActiveTab] = useState('Techno');

  return (
    <div className="p-8 bg-black min-h-screen text-white">
      <div className="flex gap-4 mb-8">
        {GENRES.map((genre) => (
          <button
            key={genre}
            className={`px-4 py-2 rounded-full ${
              activeTab === genre ? 'bg-green-500' : 'bg-gray-700'
            }`}
            onClick={() => setActiveTab(genre)}
          >
            {genre}
          </button>
        ))}
      </div>
      <div className="space-y-6">
        {songs[activeTab].map((song) => (
          <SongCard key={song.id} song={song} />
        ))}
      </div>
    </div>
  );
};

export default SampleMusic;
