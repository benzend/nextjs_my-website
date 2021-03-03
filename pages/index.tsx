import { useEffect, useState } from "react";
import { useViewportScroll } from "framer-motion";
import HomeHeader from "../components/home-components/HomeHeader";
import { HomeNav } from "../components/home-components/HomeNav";
import { HomeServices } from "../components/home-components/HomeServices";
import { variants } from "../utils/variants";
import Footer from "../components/Footer";
import { HomeBackground } from "../components/home-components/HomeBackground";

export default function Home() {
  const { scrollY } = useViewportScroll();
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [animateServiceTitle, setAnimateServiceTitle] = useState(false);
  const [animateWebsites, setAnimateWebsites] = useState(false);
  const [animateApps, setAnimateApps] = useState(false);
  const [animateMentoring, setAnimateMentoring] = useState(false);
  const drawerOpenHandler = () => {
    setDrawerOpen(true);
  };
  const drawerCloseHandler = () => {
    setDrawerOpen(false);
  };

  useEffect(() => {
    function updateVisibilty() {
      const serviceTitleReady = scrollY.get() > 140;
      const websitesReady = scrollY.get() > 200;
      const appsReady = scrollY.get() > 900;
      const mentoringReady = scrollY.get() > 1650;
      setAnimateServiceTitle(serviceTitleReady);
      setAnimateWebsites(websitesReady);
      setAnimateApps(appsReady);
      setAnimateMentoring(mentoringReady);
    }

    const unsubscribeY = scrollY.onChange(updateVisibilty);

    return () => {
      unsubscribeY();
    };
  }, []);

  return (
    <>
      <HomeBackground />
      <HomeNav
        open={drawerOpen}
        drawerOpenHandler={drawerOpenHandler}
        drawerCloseHandler={drawerCloseHandler}
      />
      <HomeHeader />
      <HomeServices
        animateTitle={animateServiceTitle}
        animateWebsites={animateWebsites}
        animateApps={animateApps}
        animateMentoring={animateMentoring}
        variants={variants}
      />
      <Footer />
    </>
  );
}
