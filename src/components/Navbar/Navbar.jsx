import Link from "next/link";
import styles from "./Navbar.module.css";
import { links } from "./data";
export default function Navbar() {
  return (
    <div className={styles.container}>
      <Link href="/" className={styles.logo}>
        HEXASHOP
      </Link>

      <div className={styles.links}>
        {links.map((link) => (
          <Link key={link.id} href={link.url} className={styles.links}>
            {link.title}
          </Link>
        ))}
      </div>
    </div>
  );
}
