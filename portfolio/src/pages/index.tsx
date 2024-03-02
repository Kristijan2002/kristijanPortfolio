import Head from "next/head";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Banner from "@/components/banner/Banner";
import About from "@/components/about/About";
import Skills from "@/components/skills/Skills";
import Projects from "@/components/projects/Projects";
import Form from "@/components/form/Form";
import Foooter from "@/components/footer/Footer";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Kristijan Maksimovski-Portfolio</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/OBJECTS (1).svg" />
      </Head>
      <main className={`${styles.main} ${inter.className}`}>
       <Banner />
       <About />
       <Skills />
       <Projects />
       <Form />
       <Foooter />
      </main>
    </>
  );
}
