import { useEffect, useState } from "react";
import { Box, makeStyles } from "@material-ui/core";
import { useViewportScroll } from "framer-motion";
import BackgroundEarth from "../../components/BackgroundEarth";
import Header from "../../components/portfolio-components/PortfolioHeader";
import Nav from "../../components/portfolio-components/PortfolioNav";
import Projects from "../../components/portfolio-components/PortfolioProjectsSection";
import About from "../../components/portfolio-components/PortfolioAboutSection";
import Contact from "../../components/portfolio-components/PortfolioContactSection";
import Footer from "../../components/portfolio-components/PortfolioFooter";
import { variants } from "../../utils/variants";

const useStyles = makeStyles({
  bg: {
    height: "300vh",
    background: "#00000600",
    zIndex: -3000000,
  },
});

export default function Home() {
  const { scrollY } = useViewportScroll();

  const classes = useStyles();

  const [animateProjects, setAnimateProjects] = useState<boolean>();

  const [animateAbout, setAnimateAbout] = useState<boolean>();

  const [animateContact, setAnimateContact] = useState<boolean>();

  useEffect(() => {
    function updateVisibilty() {
      const projectsReady = scrollY.get() > 500;
      const aboutReady = scrollY.get() > 3000;
      const contactReady = scrollY.get() > 4100;
      setAnimateProjects(projectsReady);
      setAnimateAbout(aboutReady);
      setAnimateContact(contactReady);
    }

    const unsubscribeY = scrollY.onChange(updateVisibilty);

    return () => {
      unsubscribeY();
    };
  }, []);
  return (
    <Box className={classes.bg}>
      <BackgroundEarth animate={scrollY.get()} />

      <Nav />

      <Header />

      <Projects animate={animateProjects} variants={variants} />

      <About animate={animateAbout} variants={variants} />

      <Contact animate={animateContact} variants={variants} />

      <Footer />
    </Box>
  );
}
