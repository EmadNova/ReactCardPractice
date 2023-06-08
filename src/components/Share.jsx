import React from 'react';
import styles from "../App.module.css";

const Share = ({button}) => {
    return (
        <>
            <span className={styles.button__self}>{button}</span>
        </>
    );
};

export default Share;