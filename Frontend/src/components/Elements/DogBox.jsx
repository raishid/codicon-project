import React from "react";
import styled from "styled-components";

import Altura from "../../assets/img/medida de perro.svg";
import Sexop from "../../assets/img/sexo del perro.svg";
import Lugar from "../../assets/img/lugar.svg";
import Raza from "../../assets/img/raza.svg";

export default function Dogbox({className, img, tamano, raza, Nombre,Sexo,ciudad,action}) {
  return (
    <Wrapper className={className}  onClick={action ? () => action() : null}>
      <ImgBtn className="aniamte pointer" onClick={action ? () => action() : null}>
        <img className="" src={img} alt="project"></img>
      </ImgBtn>
      <div style={{padding:20}}>
      <Row>
        
        <h3 className="font15  ">{Nombre}</h3>
      <p className="font15 "><img src={Altura} alt="" style={{width: "17px",
    margin: "0 10px 0 0"}} />{tamano}</p>
      <p className="font15  "><img src={Raza} alt="" style={{width: "17px",
    margin: "0 10px 0 0"}} />{raza}</p>
      <p className="font15 "><img src={Sexop} alt="" style={{width: "17px",
    margin: "0 10px 0 0"}} />{Sexo}</p>
      <p className="font15  "><img src={Lugar} alt="" style={{width: "17px",
    margin: "0 10px 0 0"}} />{ciudad}</p>


       
       
      </Row>
      </div>
     
     
      
     
    </Wrapper>
  );
}

const Row = styled.div`

display: grid;
justify-items: start;
`
const Col5 = styled.div`

`
const Wrapper = styled.button`
background-color: transparent;
border: 0px;
outline: none;
padding: 0px;
margin: 0px;
  width: 100%;
  margin-top: 30px;
  margin:30px;
  background-color:white;
  border-radius: 20px ;
  img,button {
    width: 100%;
    max-height: 150px;
    margin: 0px;
    object-fit: cover;
    border-radius: 20px 20px 0px 0px;
  }
  h3 {
    padding-bottom: 10px;
    color:#6F63B7;
  }
  :hover {
    box-shadow: 6px 2px 12px 4px #9E9E9E;
  }
`;
const ImgBtn = styled.button`
  background-color: transparent;
  border: 0px;
  outline: none;
  padding: 0px;
  margin: 0px;
 
`;