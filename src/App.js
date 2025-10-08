import React, { useState, useRef } from 'react';
import styles from './App.module.css';
import AudioUploader from './components/AudioUploader/AudioUploader';
import AudioPlayer from './components/AudioPlayer/AudioPlayer';
import FeedbackDisplay from './components/FeedbackDisplay/FeedbackDisplay';
import { analyzeCall } from './utils/analyzeCall';

export default function App() {
  const [file, setFile] = useState(null);
  const [audioURL, setAudioURL] = useState('');
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);
  const audioRef = useRef(null);

  const handleFile = (f) => {
    setFile(f);
    setResult(null);
    setAudioURL(URL.createObjectURL(f));
  };

  const handleProcess = async () => {
    if (!file) return alert('Please upload an audio file first.');
    setLoading(true);
    try {
      const res = await analyzeCall(file);
      setResult(res);
    } catch (err) {
      console.error(err);
      alert('Error processing the audio. Check console.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={styles.app}>
      <header className={styles.header}>
        <h1>AI Feedback Form (React)</h1>
        <p className={styles.subtitle}>
          Upload a call recording (.mp3 / .wav) and click Process
        </p>
      </header>

      <main className={styles.main}>
        <section className={styles.left}>
          <AudioUploader onFile={handleFile} />

          {audioURL && (
            <div className={styles.playerWrap}>
              <AudioPlayer src={audioURL} ref={audioRef} />
            </div>
          )}

          <div className={styles.controls}>
            <button
              className={styles.processBtn}
              onClick={handleProcess}
              disabled={loading}
            >
              {loading ? 'Processing...' : 'Process'}
            </button>
            <button
              className={styles.clearBtn}
              onClick={() => {
                setFile(null);
                setAudioURL('');
                setResult(null);
              }}
            >
              Clear
            </button>
          </div>
        </section>

        <section className={styles.right}>
          <FeedbackDisplay result={result?.aiResult} />
        </section>
      </main>

      <footer className={styles.footer}>
        <small>Pallav Technologies Assignment</small>
      </footer>
    </div>
  );
}
