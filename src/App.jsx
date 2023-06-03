import styles from "./App.module.css";

const Picture = (props) => {
    return (
        <>
            <img className={styles.img__self} src={props.imageURL} alt=""/>
        </>
    )
}

const Title = (props) => {

    return (
        <>
            <h1 className={styles.title__self}>{props.name}</h1>
        </>
    )
}

const Description = (props) => {

    return (
        <>
            <p className={styles.description__self}>{props.des}</p>
        </>
    )
}

const Share = (props) => {
    return (
        <>
            <span className={styles.button__self}>{props.button}</span>
        </>
    )
}

const LearnMore = (props) => {
    return (
        <>
            <span className={styles.button__self}>{props.button}</span>
        </>
    )
}

function App() {

    return (
        <div className={styles.card}>
            <div className={styles.card__img}>
                <Picture
                    imageURL="../public/image/su-37.jpg"/>
            </div>
            <div className={styles.card__info}>
                <Title
                    name="SU-37"/>
                <Description
                    des="SU-47 is an iconic Russian Airplane fighter known for its reliable, fast, flexible. Founded in 1911, SU has become one of the most recognizable airfighter brands in the world."
                />
                <div className={styles.card__buttons}>
                    <Share
                        button="SHARE"
                    />
                    <LearnMore
                        button="LEARN MORE"
                    />
                </div>
            </div>
        </div>
    )
}

export default App