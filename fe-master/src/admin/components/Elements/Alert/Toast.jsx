import React, { useEffect } from "react";
import styles from "./alert.module.css";

const Toast = ({ message, onClose }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, 1500);

    return () => clearTimeout(timer);
  }, [message, onClose]);

  return (
    <div className={styles.toastContainer}>
      <div className={styles.toastMessage}>{message}</div>
      <button className={styles.closeButton} onClick={onClose}>
        ×
      </button>
    </div>
  );
};

export default Toast;
