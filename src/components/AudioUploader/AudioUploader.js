import React, { useRef, useState } from 'react';
import styles from './AudioUploader.module.css';

export default function AudioUploader({ onFile }) {
  const inputRef = useRef(null);
  const [dragging, setDragging] = useState(false);

  const handleFiles = (files) => {
    const f = files[0];
    if (!f) return;
    const allowed = ['audio/mpeg', 'audio/wav', 'audio/x-wav', 'audio/mp3'];
    if (!allowed.includes(f.type) && !f.name.match(/\.(mp3|wav)$/i)) {
      alert('Please upload an mp3 or wav audio file');
      return;
    }
    onFile(f);
  };

  return (
    <div>
      <div
        className={`${styles.dropzone} ${dragging ? styles.dragging : ''}`}
        onDragOver={(e) => {
          e.preventDefault();
          setDragging(true);
        }}
        onDragLeave={() => setDragging(false)}
        onDrop={(e) => {
          e.preventDefault();
          setDragging(false);
          handleFiles(e.dataTransfer.files);
        }}
        onClick={() => inputRef.current.click()}
      >
        <p>Drag & Drop a .mp3 or .wav file here, or click to browse</p>
      </div>

      <input
        ref={inputRef}
        type="file"
        accept="audio/*"
        style={{ display: 'none' }}
        onChange={(e) => handleFiles(e.target.files)}
      />
    </div>
  );
}
