// src/components/Feedback/Feedback.jsx
import React from 'react';
import styles from './Feedback.module.css';

const Feedback = ({ feedback, total, positivePercentage }) => (
  <div className={styles.feedback}>
    <p>Good: {feedback.good}</p>
    <p>Neutral: {feedback.neutral}</p>
    <p>Bad: {feedback.bad}</p>
    <p>Total: {total}</p>
    <p>Positive Feedback: {positivePercentage}%</p>
  </div>
);

export default Feedback;
