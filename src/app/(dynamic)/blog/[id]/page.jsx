import Image from "next/image";
import styles from "./page.module.css";

export default function Post() {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <div className={styles.info}>
          <h1 className={styles.title}>XX</h1>
          <p className={styles.desc}>XX</p>
        </div>
        <div className={styles.imageContainer}>
          <Image
            className={styles.image}
            src="https://images.pexels.com/photos/159686/desk-pencil-draw-table-159686.jpeg"
            alt="post image"
            fill={true}
          />
          <span className={styles.author}>Ahmed Samy</span>
        </div>
      </header>
      <div className={styles.content}>
        <p className={styles.text}>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vel adipisci
          impedit maiores perferendis! Reprehenderit et expedita odit eos quia
          ullam voluptate ea voluptatibus voluptates assumenda dicta vel animi,
          accusantium sed alias iure. Impedit quisquam doloribus nemo eligendi
          earum harum quas, omnis deleniti magnam totam fugit exercitationem,
          nihil dolorum dolores nam.
        </p>
      </div>
    </div>
  );
}
