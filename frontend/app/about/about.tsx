import styles from "./About.module.css";
import Picture from "../../public/ID.png";
import Image from "next/image";

export default function About() {
  return (
    <div className={styles.about}>
      <section className={styles.profile}>
        <Image src={Picture} alt="profile" />
      </section>
      <section className={styles.description}>
        <h1>About Page!</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
          voluptates, quod, quia, quae voluptatem quibusdam.
        </p>
      </section>
      {/* <h1>About Page!</h1> */}
    </div>
  );
}
