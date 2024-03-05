import React, { useState } from "react";
import styles from "./alert.module.css";

const Toast = ({ message, onClose }) => {
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
