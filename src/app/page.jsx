import Image from "next/image";
import styles from "./page.module.css";
export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.col}>
        <h1 className={styles.title}>Your best online shop destination!</h1>
        <p className={styles.desc}>
          Discover a world of endless shopping at our online store. and order
          your favorite products from the comfort of your home
        </p>
        <button className={styles.button}>Shop Now</button>
      </div>
      <div className={styles.col}>
        <Image
          src="./images/hero.svg"
          className={styles.img}
          width={500}
          height={500}
          alt="Hexa Shop"
        />
      </div>
    </div>
  );
}
