import React, { useRef, useEffect, useState } from 'react';
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
const Player: React.FC = () => {
  const [audio, setAudio] = useState(null);
  const [trackIndex, setTrackIndex] = useState(0);
  const [trackProgress, setTrackProgress] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const { title, artist, album, image, audioSrc } = audioTracks[trackIndex];

  useEffect(() => {
    if (trackIndex < audioTracks.length) {
      const { title, artist, album, image, audioSrc } = audioTracks[trackIndex];
      setAudio(new Audio(`/audio/${audioSrc}.mp3`));
    }
  }, []);

  useEffect(() => {
    if (audio) {
      console.log('onclick');
      const { duration, currentTime } = audio;
      console.log('duration', duration);
      console.log('currentTime', currentTime);
      if (isPlaying) {
        audio.play();

        audio.onended = () => {
          toNextTrack();
        };
      } else if (!isPlaying) {
        audio.pause();
      }
    }
  }, [audio, isPlaying]);

  useEffect(() => {
    console.log('trackIndex change', trackIndex);

    if (audio) {
      if (isPlaying) {
        loadTrack(trackIndex);
      }
    }
  }, [trackIndex]);
  const onScrub = (value) => {
    setTrackProgress(audio.current.currentTime);
  };
  const toNextTrack = () => {
    setTrackIndex(() => trackIndex + 1);
    // loadTrack(trackIndex+1)
    // if (trackIndex < audioTracks.length - 1) {
    // } else {
    //   console.log('call toNextTrack else')
    //   setTrackIndex(0);
    // }
  };
  const loadTrack = (newLoadTrackIdx) => {
    if (newLoadTrackIdx < audioTracks.length) {
      audio.src = `/audio/${audioTracks[newLoadTrackIdx].audioSrc}.mp3`;
      audio.play();
    } else {
      console.log('no track');
      audio.pause();
    }
  };
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
        <div>Playing: {title}</div>
        <div className="flex items-center ml-8 w-2/3 bg-slate-600 h-4">
          <div className={`bg-slate-300 w-${20} h-3`}></div>
        </div>
      </div>
    </div>
  );
};
export default Player;
