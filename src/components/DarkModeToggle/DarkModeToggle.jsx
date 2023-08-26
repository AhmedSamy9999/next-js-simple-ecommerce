import styles from "./DarkModeToggle.module.css";

export default function DarkModeToggle() {
  return (
    <div className={styles.container}>
      <div className={styles.icon}>🌙</div>
      <div className={styles.icon}>🌚</div>
      <div className={styles.switcher} />
    </div>
  );
}
