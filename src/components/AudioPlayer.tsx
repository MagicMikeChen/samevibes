import React, { useState, useEffect, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { audioTracks } from '../../common';

const AudioPlayer: React.FC = () => {
  // State
  const [trackIndex, setTrackIndex] = useState(0);
  const [trackProgress, setTrackProgress] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [duration, setDuration] = useState(0);
  const [trackStyling, setTrackStyling] = useState('');

  // Destructure for conciseness
  const { title, artist, type, image, audioSrc } = (audioTracks ? audioTracks[trackIndex] : {title:'', artist:'', type:'', image:'', audioSrc:'' });

  // Refs
  const audioRef = useRef<HTMLAudioElement | undefined>(
    typeof Audio !== 'undefined' ? new Audio('') : undefined
  );
  const intervalRef = useRef(0);
  const isReady = useRef(false);

  useEffect(() => {
    if (audioRef && audioRef.current) {
      const { duration } = audioRef.current;
      setDuration(duration);
      const currentPercentage = duration
        ? `${(trackProgress / duration) * 100}%`
        : '0%';
      const trackStyling = `
         -webkit-gradient(linear, 0% 0%, 100% 0%, color-stop(${currentPercentage}, #fff), color-stop(${currentPercentage}, #555))
       `;
      setTrackStyling(trackStyling);
    }
  }, [duration, trackStyling, trackProgress]);

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

    audioRef.current = new Audio(`/audio/${audioSrc}.mp3`);
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
    <div className="p-4 cs-navbar-style-light dark:cs-navbar-style-dark">
      <div className="flex items-center">
      <div
          className="flex mx-1 items-center cursor-pointer"
          onClick={toPrevTrack}
        >
          <FontAwesomeIcon
            icon={['fas', 'step-backward']}
            className="icon-common mr-2 "
          ></FontAwesomeIcon>
        </div>
        {isPlaying ? (
          <div
            className="flex mx-1 items-center cursor-pointer"
            onClick={() => setIsPlaying(false)}
          >
            <FontAwesomeIcon
              icon={['fas', 'pause']}
              className="icon-common mr-2 "
            ></FontAwesomeIcon>
          </div>
        ) : (
          <div
            className="flex mx-1 items-center cursor-pointer"
            onClick={() => setIsPlaying(true)}
          >
            <FontAwesomeIcon
              icon={['fas', 'play']}
              className="icon-common mr-2 "
            ></FontAwesomeIcon>
          </div>
        )}

        <div
          className="flex mx-1 items-center cursor-pointer"
          onClick={toNextTrack}
        >
          <FontAwesomeIcon
            icon={['fas', 'step-forward']}
            className="icon-common mr-2 "
          ></FontAwesomeIcon>
        </div>
        <div className="min-w-max">{title && title}</div>
        <div className="flex items-center mx-8 w-full mt-1">
          <input
            type="range"
            value={trackProgress}
            step="1"
            min="0"
            max={duration ? duration : `${duration}`}
            className="w-full"
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
export default AudioPlayer;