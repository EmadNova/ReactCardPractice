import React from 'react';
import styles from "../App.module.css";

const Picture = ({imageURL}) => {
    return (
        <>
            <img className={styles.img__self} src={imageURL} alt=""/>
        </>
    );
};

export default Picture;