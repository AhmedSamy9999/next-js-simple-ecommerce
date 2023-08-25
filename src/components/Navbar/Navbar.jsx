import Link from "next/link";
import styles from "./Navbar.module.css";
import { links } from "./data";
import Button from "@/elements/Button/Button";
import Logo from "@/elements/Logo/Logo";
export default function Navbar() {
  return (
    <div className={styles.container}>
      <Logo />
      <div className={styles.links}>
        {links.map((link) => (
          <Link key={link.id} href={link.url} className={styles.links}>
            {link.title}
          </Link>
        ))}
        <Button />
      </div>
    </div>
  );
}
