import React from 'react';
import styles from "../App.module.css";

const Title = ({name}) => {
    return (
        <>
            <h1 className={styles.title__self}>{name}</h1>
        </>
    );
};

export default Title;