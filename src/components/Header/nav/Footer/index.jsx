import styles from './style.module.scss';

export default function index() {
  return (
    <div className={styles.footer}>
        <a>Certificates</a>
        <a>Infrastructure</a>
        <a>R&D</a>
        <a>Policies</a>
    </div>
  )
}
