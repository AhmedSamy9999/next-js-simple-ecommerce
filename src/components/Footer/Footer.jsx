import Image from "next/image";
import styles from "./Footer.module.css";
import { socialMedia } from "./data";

export default function Footer() {
  return (
    <div className={styles.container}>
      <div>© 2023 Hexashop. All rights reserved</div>
      <div className={styles.social}>
        {socialMedia.map((media) => (
          <Image
            key={media.id}
            src={`/images/icons/${media.media}.png`}
            width={20}
            height={20}
            className={styles.icon}
            alt={`Hexashop ${media.media} link`}
          />
        ))}
      </div>
    </div>
  );
}
