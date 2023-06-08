import React from 'react';
import styles from "../App.module.css";

const Description = ({des}) => {
    return (
        <>
            <p className={styles.description__self}>{des}</p>
        </>
    );
};

export default Description;