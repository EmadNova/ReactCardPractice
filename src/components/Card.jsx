import React from 'react';
import styles from "../App.module.css";
import Picture from "./Picture.jsx";
import Title from "./Title.jsx";
import Description from "./Description.jsx";
import Button from "./Button.jsx";

const Card = ({imageURL, name, des, button, button2}) => {

    return (
        <div>
            <div className={styles.card}>
                <div className={styles.card__img}>
                    <Picture imageURL={imageURL}/>
                </div>
                <div className={styles.card__info}>
                    <Title name={name}/>
                    <Description des={des}/>
                    <div className={styles.card__buttons}>
                        <Button button={button}/>
                        <Button button2={button2}/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card;
