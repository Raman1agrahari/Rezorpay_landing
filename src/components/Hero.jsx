import React from "react";
import HeroStrip from "./HeroStrip";
import HeroMain from "./HeroMain";
import HeroBottom from "./HeroBottom";

const Hero = ({ onOpenModal }) => {
  return (
    <>
      <HeroStrip />
      <HeroMain onOpenModal={onOpenModal} />
      <HeroBottom />
    </>
  );
};

export default Hero;
