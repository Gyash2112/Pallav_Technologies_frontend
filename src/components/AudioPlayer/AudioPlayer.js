import React, {
  forwardRef,
  useImperativeHandle,
  useRef,
  useState,
} from 'react';
import styles from './AudioPlayer.module.css';

const AudioPlayer = forwardRef(({ src }, ref) => {
  const audioRef = useRef(null);
  const [playing, setPlaying] = useState(false);

  useImperativeHandle(ref, () => ({
    pause: () => audioRef.current && audioRef.current.pause(),
  }));

  const toggle = () => {
    if (!audioRef.current) return;
    if (playing) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
  };

  return (
    <div className={styles.player}>
      <audio
        ref={audioRef}
        src={src}
        onPlay={() => setPlaying(true)}
        onPause={() => setPlaying(false)}
        controls
      />
    </div>
  );
});

export default AudioPlayer;
