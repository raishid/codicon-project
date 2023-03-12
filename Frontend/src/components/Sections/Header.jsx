import React from "react";
import styled from "styled-components";
import Adopt from "../Elements/Adopt";
// Components
import FullButton from "../Buttons/FullButton";
// Assets
import HeaderImage from "../../assets/svg/fondo home.svg";
import doggImage from "../../assets/svg/perrito adopta home.svg";
import Dots from "../../assets/svg/Dots";

const DivHome = styled.div`
height: 90vh;
`;
const Img2 = styled.img`
width: 110vw;height: 90vh;object-fit: cover;position:absolute;z-index:-10
`;
const Divdisplay = styled.div`
height: 80vh;
display: flex;
place-content: center;
-webkit-box-align: center;
align-items: center;
-webkit-box-pack: center;
justify-content: flex-end;
flex-wrap: nowrap;
flex-direction: column;
@media (max-width: 700px) {
  height: 70vh;
}
}
`;

export default function Header() {
  return (
    <DivHome id="home" >
  <Img2 className="radius8" src={HeaderImage} alt="office" />
  <Divdisplay >
   
    <a className="" style={{ padding: "10px 15px", cursor: 'auto' }} >
                
                <ImgDog className="radius8" src={doggImage} alt="office" />
              </a> <br></br>
              <h2 className="">
        Adopta un perrito
    </h2>
</Divdisplay>
    </DivHome>
        
        
            
        
       
  );
}


const Wrapper = styled.section`
  padding-top: 80px;
  width: 100%;
  min-height: 840px;
  @media (max-width: 960px) {
    flex-direction: column;
  }
`;
const ImgDog =styled.img`
max-width:250px;
@media (max-width: 960px) {
  flex-direction: column;
}
`;
const LeftSide = styled.div`
  width: 50%;
  height: 100%;
  @media (max-width: 960px) {
    width: 100%;
    order: 2;
    margin: 50px 0;
    text-align: center;
  }
  @media (max-width: 560px) {
    margin: 80px 0 50px 0;
  }
`;
const RightSide = styled.div`
  width: 50%;
  height: 100%;
  @media (max-width: 960px) {
    width: 100%;
    order: 1;
    margin-top: 30px;
  }
`;
const HeaderP = styled.div`
  max-width: 470px;
  padding: 15px 0 50px 0;
  line-height: 1.5rem;
  @media (max-width: 960px) {
    padding: 15px 0 50px 0;
    text-align: center;
    max-width: 100%;
  }
`;
const BtnWrapper = styled.div`
  max-width: 190px;
  @media (max-width: 960px) {
    margin: 0 auto;
  }
`;
const GreyDiv = styled.div`
  width: 30%;
  height: 700px;
  position: absolute;
  top: 0;
  right: 0;
  z-index: 0;
  @media (max-width: 960px) {
    display: none;
  }
`;
const ImageWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  position: relative;
  z-index: 9;
  @media (max-width: 960px) {
    width: 100%;
    justify-content: center;
  }
`;
const Img = styled.img`
  @media (max-width: 560px) {
    width: 80%;
    height: auto;
  }
`;
const QuoteWrapper = styled.div`
  position: absolute;
  left: 0;
  bottom: 50px;
  max-width: 330px;
  padding: 30px;
  z-index: 99;
  @media (max-width: 960px) {
    left: 20px;
  }
  @media (max-width: 560px) {
    bottom: -50px;
  }
`;
const QuotesWrapper = styled.div`
  position: absolute;
  left: -20px;
  top: -10px;
`;
const DotsWrapper = styled.div`
  position: absolute;
  right: -100px;
  bottom: 100px;
  z-index: 2;
  @media (max-width: 960px) {
    right: 100px;
  }
  @media (max-width: 560px) {
    display: none;
  }
`;


