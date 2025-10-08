import React from 'react';
import styles from './FeedbackDisplay.module.css';

const PARAMS = [
  {
    key: 'greeting',
    name: 'Greeting',
    weight: 5,
    desc: 'Call opening within 5 seconds',
    inputType: 'PASS_FAIL',
  },
  {
    key: 'collectionUrgency',
    name: 'Collection Urgency',
    weight: 15,
    desc: 'Create urgency, cross-questioning',
    inputType: 'SCORE',
  },
  {
    key: 'rebuttalCustomerHandling',
    name: 'Rebuttal Handling',
    weight: 15,
    desc: 'Address penalties, objections',
    inputType: 'SCORE',
  },
  {
    key: 'callEtiquette',
    name: 'Call Etiquette',
    weight: 15,
    desc: 'Tone, empathy, clear speech',
    inputType: 'SCORE',
  },
  {
    key: 'callDisclaimer',
    name: 'Call Disclaimer',
    weight: 5,
    desc: 'Take permission before ending',
    inputType: 'PASS_FAIL',
  },
  {
    key: 'correctDisposition',
    name: 'Correct Disposition',
    weight: 10,
    desc: 'Use correct category with remark',
    inputType: 'PASS_FAIL',
  },
  {
    key: 'callClosing',
    name: 'Call Closing',
    weight: 5,
    desc: 'Thank the customer properly',
    inputType: 'PASS_FAIL',
  },
  {
    key: 'fatalIdentification',
    name: 'Identification',
    weight: 5,
    desc: 'Missing agent/customer info',
    inputType: 'PASS_FAIL',
  },
  {
    key: 'fatalTapeDiscloser',
    name: 'Tape Disclosure',
    weight: 10,
    desc: 'Inform customer about recording',
    inputType: 'PASS_FAIL',
  },
  {
    key: 'fatalToneLanguage',
    name: 'Tone & Language',
    weight: 15,
    desc: 'No abusive or threatening speech',
    inputType: 'PASS_FAIL',
  },
];

export default function FeedbackDisplay({ result }) {
  if (!result) return <p>No analysis yet. Upload a file and click Process.</p>;

  const totalPossible = PARAMS.reduce((s, p) => s + p.weight, 0);
  const totalScore = PARAMS.reduce(
    (s, p) => s + (result.scores[p.key] || 0),
    0
  );
  const percent = ((totalScore / totalPossible) * 100).toFixed(0);

  return (
    <div className={styles.container}>
      <div className={styles.summary}>
        <h2>Analysis Result</h2>
        <p>
          Total Score: {totalScore} / {totalPossible} ({percent}%)
        </p>
      </div>

      <div className={styles.params}>
        {PARAMS.map((p) => (
          <div className={styles.param} key={p.key}>
            <div>
              <strong>{p.name}:</strong> {result.scores[p.key] ?? 0} /{' '}
              {p.weight}
            </div>
            <div className={styles.desc}>{p.desc}</div>
          </div>
        ))}
      </div>

      <div className={styles.texts}>
        <h3>Overall Feedback</h3>
        <p>{result.overallFeedback}</p>

        <h3>Observation</h3>
        <p>{result.observation}</p>
      </div>
    </div>
  );
}
