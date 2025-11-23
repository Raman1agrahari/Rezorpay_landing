import React from "react";
import HeroStrip from "./HeroStrip";
import HeroMain from "./HeroMain";
import HeroBottom from "./HeroBottom";

const Hero = ({ onOpenModal }) => {
  return (
    <>
      <HeroStrip onOpenModal={onOpenModal} />
      <HeroMain onOpenModal={onOpenModal} />
      <HeroBottom />
    </>
  );
};

export default Hero;
