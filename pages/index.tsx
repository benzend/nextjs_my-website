import { useState } from "react";
import HomeHeader from "../components/home-components/HomeHeader";
import { HomeNav } from "../components/home-components/HomeNav";
import { HomeServices } from "../components/home-components/HomeServices";

export default function Home() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const drawerOpenHandler = () => {
    setDrawerOpen(true);
  };
  const drawerCloseHandler = () => {
    setDrawerOpen(false);
  };
  return (
    <>
      <HomeNav
        open={drawerOpen}
        drawerOpenHandler={drawerOpenHandler}
        drawerCloseHandler={drawerCloseHandler}
      />
      <HomeHeader />
      <HomeServices />
    </>
  );
}
