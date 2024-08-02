// src/components/Notification/Notification.jsx
import styles from './Notification.module.css';

const Notification = ({ message }) => (
  <div className={styles.notification}>
    <p>{message}</p>
  </div>
);

export default Notification;
