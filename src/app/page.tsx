import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <main className={styles.main}>
      <h1>    tem mulher que nao depende de homem !!!!!! </h1>
      <h2> let's go 4</h2>
      <h3> subtitulo</h3>
      <Link href={"/sobre"}> Sobre </Link>
    </main>
  );
}
