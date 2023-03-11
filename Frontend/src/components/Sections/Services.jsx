import React from "react";
import styled from "styled-components";
// Components
import ClientSlider from "../Elements/ClientSlider";
import ServiceBox from "../Elements/ServiceBox";
import FullButton from "../Buttons/FullButton";
// Assets
import AddImage1 from "../../assets/img/add/1.png";
import AddImage2 from "../../assets/img/add/2.png";
import AddImage3 from "../../assets/img/add/3.png";
import AddImage4 from "../../assets/img/add/4.png";

export default function Services() {
  return (
    <Wrapper id="services">
     
      <div className="whiteBg" style={{ padding: "60px 0" }}>

        <div className="container">
          <HeaderInfo>
            <h1 className="font40 extraBold">Beneficios de adoptar a una mascota</h1>
            
          </HeaderInfo>
          <ServiceBoxRow className="flex flexSpaceCenter2">
            <ServiceBoxWrapper>
              <ServiceBox
                icon="casa"
                color="#A5DFD3"
                subtitle="Provee bienestar y comida a otro ser vivo que lo necesita."
              />
            </ServiceBoxWrapper>
            <ServiceBoxWrapper>
              <ServiceBox
                icon="corazon"
                color="#B6B0DB"
                subtitle="Tendrás un amigo incondicional dispuesto a darte todo su cariño."
              />
            </ServiceBoxWrapper>
            <ServiceBoxWrapper>
              <ServiceBox
                icon="taza"
               color="#FFCD9B"
                subtitle="Ayudas a darle hogar a una mascota del refugio o en situación de calle."
              />
            </ServiceBoxWrapper>
            

            
          </ServiceBoxRow>
          <ServiceBoxRow className="flex flexSpaceCenter2">
            <ServiceBoxWrapper>
              <ServiceBox
                icon="pata"
                color="#FFCD9B"
                subtitle="Dejas huella en tu comunidad sirviendo de ejemplo para otros."
              />
            </ServiceBoxWrapper>
            <ServiceBoxWrapper>
              <ServiceBox
                icon="pelota"
                color="#A5DFD3"
                subtitle="Puedes divertirte y compartir muy buenos momentos."
              />
            </ServiceBoxWrapper>
            <ServiceBoxWrapper>
              <ServiceBox
                icon="hueso"
               color="#B6B0DB"
                subtitle="Aprendes a adquirir compromiso y lazos fuertes de amor y amitad."
              />
            </ServiceBoxWrapper>
            

            
          </ServiceBoxRow>
          
        </div>
        
      </div>
      
    
    </Wrapper>
  );
}

const Wrapper = styled.section`
  width: 100%;
`;
const ServiceBoxRow = styled.div`

  @media (max-width: 860px) {
    flex-direction: column;
    display: flex;
    align-content: center;
    align-items: center;
    text-align: center;
  }
`;
const ServiceBoxWrapper = styled.div`
flex-direction: column;
display: flex;
align-content: center;
align-items: center;
text-align: center;
  width: 20%;

  padding: 30px 0;
  @media (max-width: 860px) {
    width: 100%;
    text-align: center;
    padding: 40px 0;
  }
`;
const HeaderInfo = styled.div`
  @media (max-width: 860px) {
    text-align: center;
  }
`;
const Advertising = styled.div`
  margin: 80px 0;
  padding: 100px 0;
  position: relative;
  @media (max-width: 1160px) {
    padding: 100px 0 40px 0;
  }
  @media (max-width: 860px) {
    flex-direction: column;
    padding: 0 0 30px 0;
    margin: 80px 0 0px 0;
  }
`;
const ButtonsRow = styled.div`
  @media (max-width: 860px) {
    justify-content: space-between;
  }
`;
const AddLeft = styled.div`
  width: 50%;
  p {
    max-width: 475px;
  }
  @media (max-width: 860px) {
    width: 80%;
    order: 2;
    text-align: center;
    h2 {
      line-height: 3rem;
      margin: 15px 0;
    }
    p {
      margin: 0 auto;
    }
  }
`;
const AddRight = styled.div`
  width: 50%;
  position: absolute;
  top: -70px;
  right: 0;
  @media (max-width: 860px) {
    width: 80%;
    position: relative;
    order: 3;
    top: 15px;
  }
`;
const AddRightInner = styled.div`
  width: 100%;
`;
const AddImgWrapp1 = styled.div`
  width: 48%;
  margin: 0 6% 10px 6%;
  img {
    width: 100%;
    height: auto;
    border-radius: 1rem;
    box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
    -webkit-box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
    -moz-box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
  }
`;
const AddImgWrapp2 = styled.div`
  width: 30%;
  margin: 0 5% 10px 5%;
  img {
    width: 100%;
    height: auto;
    border-radius: 1rem;
    box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
    -webkit-box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
    -moz-box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
  }
`;
const AddImgWrapp3 = styled.div`
  width: 20%;
  margin-left: 40%;
  img {
    width: 100%;
    height: auto;
    border-radius: 1rem;
    box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
    -webkit-box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
    -moz-box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
  }
`;
const AddImgWrapp4 = styled.div`
  width: 30%;
  margin: 0 5%auto;
  img {
    width: 100%;
    height: auto;
    border-radius: 1rem;
    box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
    -webkit-box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
    -moz-box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
  }
`;