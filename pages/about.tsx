import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

const About: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>About</title>
      </Head>

      <h3>About page</h3>
    </div>
  );
};

export default About;
