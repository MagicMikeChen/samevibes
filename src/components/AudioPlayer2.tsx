import React, { useState, useEffect, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const audioTracks = [
  {
    audioSrc: 'Madly_Deeply',
    title: 'Madly Deeply',
    image: '',
    album: '',
    artist: '',
    type: '',
  },
  {
    audioSrc: 'The_corn_road',
    title: 'The corn road',
    image: '',
    album: '',
    artist: '',
    type: '',
  },
  {
    audioSrc: 'Me_And_Jerry_Reed',
    title: 'Me And Jerry Reed',
    image: '',
    album: '',
    artist: '',
    type: '',
  },
];
const Player2: React.FC = () => {
  const isServer = typeof window === 'undefined';

  // State
  const [trackIndex, setTrackIndex] = useState(0);
  const [trackProgress, setTrackProgress] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [duration, setDuration] = useState(0);
  const [trackStyling, setTrackStyling] = useState('');

  // Destructure for conciseness
  const { title, artist, type, image, audioSrc } = audioTracks[trackIndex];

  // Refs
  const audioRef = useRef<HTMLAudioElement | undefined>(
    typeof Audio !== 'undefined' ? new Audio('') : undefined
  );
  const intervalRef = useRef(0);
  const isReady = useRef(false);

  useEffect(() => {
    if (audioRef && audioRef.current) {
      // Destructure for conciseness
      const { duration } = audioRef.current;
      setDuration(duration);
      const currentPercentage = duration
        ? `${(trackProgress / duration) * 100}%`
        : '0%';
      const trackStyling = `
         -webkit-gradient(linear, 0% 0%, 100% 0%, color-stop(${currentPercentage}, #fff), color-stop(${currentPercentage}, #777))
       `;
      setTrackStyling(trackStyling);
    }
  }, []);

  const startTimer = () => {
    // Clear any timers already running
    clearInterval(intervalRef.current);

    intervalRef.current = window.setInterval(() => {
      if (audioRef.current.ended) {
        toNextTrack();
      } else {
        setTrackProgress(audioRef.current.currentTime);
      }
    }, 1000);
  };

  const onScrub = (value) => {
    // Clear any timers already running
    clearInterval(intervalRef.current);
    audioRef.current.currentTime = value;
    setTrackProgress(audioRef.current.currentTime);
  };

  const onScrubEnd = () => {
    // If not already playing, start
    if (!isPlaying) {
      setIsPlaying(true);
    }
    startTimer();
  };

  const toPrevTrack = () => {
    if (trackIndex - 1 < 0) {
      setTrackIndex(audioTracks.length - 1);
    } else {
      setTrackIndex(trackIndex - 1);
    }
  };

  const toNextTrack = () => {
    if (trackIndex < audioTracks.length - 1) {
      setTrackIndex(trackIndex + 1);
    } else {
      setTrackIndex(0);
    }
  };

  useEffect(() => {
    if (isPlaying) {
      audioRef.current.play();
      startTimer();
    } else {
      audioRef.current.pause();
    }
  }, [isPlaying]);

  // Handles cleanup and setup when changing tracks
  useEffect(() => {
    audioRef.current.pause();

    audioRef.current = new Audio((`/audio/${audioSrc}.mp3`));
    setTrackProgress(audioRef.current.currentTime);

    if (isReady.current) {
      audioRef.current.play();
      setIsPlaying(true);
      startTimer();
    } else {
      // Set the isReady ref as true for the next pass
      isReady.current = true;
    }
  }, [trackIndex]);

  useEffect(() => {
    // Pause and clean up on unmount
    return () => {
      audioRef.current.pause();
      clearInterval(intervalRef.current);
    };
  }, []);

  return (
    <div className="p-4 bg-gray-700">
      <div className="flex items-center">
        <div
          className="flex mx-1 items-center"
          onClick={() => setIsPlaying(true)}
        >
          <FontAwesomeIcon
            icon={['fas', 'play']}
            className="icon-common mr-2 "
          ></FontAwesomeIcon>
        </div>
        <div
          className="flex mx-1 items-center"
          onClick={() => setIsPlaying(false)}
        >
          <FontAwesomeIcon
            icon={['fas', 'pause']}
            className="icon-common mr-2 "
          ></FontAwesomeIcon>
        </div>
        <div className="flex mx-1 items-center" onClick={toNextTrack}>
          <FontAwesomeIcon
            icon={['fas', 'step-forward']}
            className="icon-common mr-2 "
          ></FontAwesomeIcon>
        </div>
        <div>{title}</div>
        <div className="flex items-center ml-8 w-2/3 bg-slate-600 h-4">
          <input
            type="range"
            value={trackProgress}
            step="1"
            min="0"
            max={duration ? duration : `${duration}`}
            className="progress"
            onChange={(e) => onScrub(e.target.value)}
            onMouseUp={onScrubEnd}
            onKeyUp={onScrubEnd}
            style={{ background: trackStyling }}
          />
        </div>
      </div>
    </div>
  );
};
export default Player2;
