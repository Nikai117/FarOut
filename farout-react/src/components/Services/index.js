import React from "react";
import Icon1 from "../../Pages/Media/denmark.jpg";
import Icon2 from "../../Pages/Media/kyotojapan.jpg";
import Icon3 from "../../Pages/Media/flightwing.jpg";
import {
    ServicesContainer,
    ServicesHeader,
    ServicesWrapper,
    ServicesCard,
    ServicesIcon,
    ServicesHeader2,
    ServicesText,
  } from "./ServiceElements";
  

const Services = () => {
    return (
      <ServicesContainer id="services">
        <ServicesHeader>Services News</ServicesHeader>
        <ServicesWrapper>
          <ServicesCard>
            <ServicesIcon src={Icon1} />
            <ServicesHeader2>Go to Denmark!</ServicesHeader2>
            <ServicesText>
              Discover a country with an ever refreshing nature
            </ServicesText>
          </ServicesCard>
          <ServicesCard>
            <ServicesIcon src={Icon2} />
            <ServicesHeader2>New destination Kyoto!</ServicesHeader2>
            <ServicesText>
              Kyoto will be added soon into the cities list
            </ServicesText>
          </ServicesCard>
          <ServicesCard>
            <ServicesIcon src={Icon3} />
            <ServicesHeader2>COVID restricitons lifted</ServicesHeader2>
            <ServicesText>
              The time has come to travel without COVID restrictions
            </ServicesText>
          </ServicesCard>
        </ServicesWrapper>
      </ServicesContainer>
    );
  };
  
  export default Services;