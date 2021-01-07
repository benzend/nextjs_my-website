import Head from "next/head";
import { Suspense, useEffect, useState } from "react";
import About from "../components/About";
import BackgroundEarth from "../components/BackgroundEarth";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Nav from "../components/Nav";
import Projects from "../components/Projects";

export default function Home() {
  const [yoffset, setYoffset] = useState<number>(0);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setYoffset(window.pageYOffset);
    });
  }, []);

  return (
    <div>
      <Head>
        <title>Benjamin Scott | A React.js Web Developer</title>
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
        />
      </Head>

      <BackgroundEarth yoffset={yoffset} />

      <Nav />

      <Header />

      <Projects />

      <About />

      <Footer />
    </div>
  );
}
