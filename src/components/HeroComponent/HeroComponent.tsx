import styles from './Hero.module.css'

export const HeroComponent = () => {
    return window.innerWidth > 768 ? <div className={styles.hero} /> : null
}
