import React from 'react';
import styles from "../App.module.css";

const LearnMore = ({button2}) => {
    return (
        <>
            <span className={styles.button__self}>{button2}</span>
        </>
    );
};

export default LearnMore;