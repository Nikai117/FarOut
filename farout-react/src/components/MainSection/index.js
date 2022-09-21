import React, { useState } from "react";
import Video from "../../stock/planet.mp4";
import {
  MainContainer,
  MainBg,
  VideoBg,
  MainContent,
  MainH1,
} from "./MainSectionElements";

const MainSection = () => {
  const [hover, setHover] = useState(false);
  const onHover = () => {
    setHover(!hover);
  };
  return (
    <MainContainer>
      <MainBg>
        <VideoBg autoPlay loop muted src={Video} type="video/mp4" />
      </MainBg>
      <MainContent>
        <MainH1>Travel For Everyone</MainH1>
      </MainContent>
    </MainContainer>
  );
};

export default MainSection;
