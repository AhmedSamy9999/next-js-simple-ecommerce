import Image from "next/image";
import styles from "./page.module.css";

async function getData(id) {
  const res = await fetch(`https://dummyjson.com/products/${id}`);

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export default async function Post({ params }) {
  const product = await getData(params.id);
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <div className={styles.info}>
          <h1 className={styles.title}>{product.title}</h1>
          <p className={styles.desc}>{product.description}</p>
        </div>
        <div className={styles.imageContainer}>
          <Image
            className={styles.image}
            src={product.thumbnail}
            alt={product.title}
            fill={true}
          />
          <span className={styles.author}>{product.category}</span>
        </div>
      </header>
      <div className={styles.content}>
        <div className={styles.gallery}>
          {product.images.map((image) => (
            <Image
              key={product.id}
              src={image}
              alt={product.title}
              width={200}
              height={200}
            />
          ))}
        </div>
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
