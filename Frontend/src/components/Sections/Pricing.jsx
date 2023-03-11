import React from "react";
import styled from "styled-components";
// Components
import ClientSlider from "../Elements/ClientSlider";
import ServiceBox from "../Elements/ServiceBox";
import FullButton from "../Buttons/FullButton";
// Assets
import AddImage1 from "../../assets/img/ya-somos-familia.jpg";
import AddImage2 from "../../assets/img/add/2.png";
import AddImage3 from "../../assets/img/add/3.png";
import AddImage4 from "../../assets/img/add/4.png";
export default function Pricing() {
  return (
    <Wrapper id="pricing">
   
<div className="whiteBg">
  <div className="container">
    <Advertising className="flexSpaceCenter">
      <AddLeft>
        <Flexi className="" >
<div><p className="font12 textCenter">
        Sé parte de los humanos que siembran amor y esperanza para todos. Adopta a una mascota hoy y conseguirás a un amigo fiel para siempre.
        </p></div>
        
        <div className=" textCenter" style={{width:"466px",    margin: "29px 0px"}}>
     
      <a href="/" className="whiteColor radius8 greenBg" style={{ padding: "10px 15px" }}>
                ADOPTAR
              </a>
      </div>
        </Flexi>
      
       
      </AddLeft>
      <div className="flexNullCenter">
            <AddImgWrapp1 className="flexCenter">
              <img src={AddImage1} alt="office" />
            </AddImgWrapp1>
          
          </div>
      <AddRight>
        <AddRightInner>
          
         
        </AddRightInner>
      </AddRight>
    </Advertising>
  </div>
</div>

    </Wrapper>
  );
}
const Flexi = styled.section`
margin: 0px  0px 30px 0px; display:flex;
flex-direction: column;
align-items: center;
`;
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
  margin-right: 5%;
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
  top: 0px;
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
height: 199px;
  margin: 0 6% 10px 6%;
  img {
    object-fit: cover;
    width: 500px;
    height: 316px;
    border-radius: 1rem;
    box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
    -webkit-box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
    -moz-box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
  }
  @media (max-width: 860px){
    img {
      width: 300px;
      height: 200px;
    }
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