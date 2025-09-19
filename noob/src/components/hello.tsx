import styles from "../hello.module.css"

export function HelloWorld() {
    return (
        <div className={styles.body}>
            <h1 className={styles.h1}>Hello World!</h1>
            <p className={styles.h1}>Zippidy doo dah zippidy day</p>
          
        </div>
    )
}