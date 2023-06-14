import React from 'react';
import styles from "../App.module.css";

const Button = ({button,button2}) => {
    return (
        <>
            <span className={styles.button__self}>{button}</span>
            <span className={styles.button__self}>{button2}</span>
        </>
    );
};

export default Button;