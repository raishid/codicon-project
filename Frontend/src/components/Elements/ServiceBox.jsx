import React from "react";
import styled from "styled-components";
// Assets

//import PrinterIcon from "../../assets/svg/taza";

export default function ServiceBox({icon, title, subtitle,color}) {
  let getIcon;

  switch (icon) {
    case "taza":
      getIcon =  "./src/assets/svg/taza.svg";
   
      break;
    case "corazon":
      getIcon = "./src/assets/svg/corazón.svg";
      break;
    case "casa":
      getIcon = "./src/assets/svg/casa.svg";
      break;
      case "pata":
      getIcon = "./src/assets/svg/pata.svg";
      break;
      case "pelota":
      getIcon = "./src/assets/svg/pelota.svg";
      break;
      case "hueso":
      getIcon = "./src/assets/svg/hueso.svg";
      break;
 
    default:
      getIcon = "./src/assets/svg/taza.svg";
      break;
   
  }


  return (
    <Wrapper className="flex flexColumn flexNullCenter" >
      <Circle style={{background:color}}>
      <Img src={getIcon}>
      </Img>
      </Circle>
     
    
      <TitleStyle className="font20 extraBold">{title}</TitleStyle>
      <SubtitleStyle className="font13">{subtitle}</SubtitleStyle>
    </Wrapper>
  );
}

const Img = styled.img`
max-width: 64px;
`;


const Circle =styled.div`
 
  border-radius: 50%;
  width: 100px;
  height: 100px;
  display: flex;
  justify-content: center;
  `;


const Wrapper = styled.div`
  width: 100%;
`;
const IconStyle = styled.div`
HEIGHT: 36PX;
  @media (max-width: 860px) {
    margin: 0 auto;

  }
`;
const TitleStyle = styled.h2`
  width: 100%;
  max-width: 300px;
  margin: 0 auto;
  padding: 20px 0;
  @media (max-width: 860px) {
    padding: 20px 0;
  }
`;
const SubtitleStyle = styled.p`
  width: 100%;
  max-width: 300px;
  margin: 0 auto;
`;