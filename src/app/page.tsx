import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <main className={styles.main}>
      <h1>   olá mundo? </h1>
      <h2> que tudo aconteça como tem que acontecer</h2>
      <h3> subtitulo</h3>
      <Link href={"/sobre"}> Sobre </Link>
    </main>
  );
}
