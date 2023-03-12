import React from "react";
import styled from "styled-components";
// Assets
import ContactImg1 from "../../assets/img/contact-1.png";
import ContactImg2 from "../../assets/img/contact-2.png";
import ContactImg3 from "../../assets/img/contact-3.png";

export default function Contact() {
  return (
    <Wrapper id="contact">
      <div className="purpleBg">
        <div className="container">
          <HeaderInfo>
            <h1 className="font40 extraBold">Contactos</h1>
           
          </HeaderInfo>

        <div className="row pb-5 ">
          <div className="col-md-6  whiteColor">
<h5 className="pb-2">
Gracias por estar aquí, esperamos que tu mejor amigo.
</h5>
<p  className="pb-4">
Si tienes dudas o quieres comunicarte con nosotros, estos son los canales de contacto que ponemos a tu disposición.</p>
<h5 className="textCenter pb-2">
Contact@onbox.com
</h5>
          </div>
          <div className="col-md-6">
            <div className="whiteBg rounded-7 row p-4">
              <div className="col-7">
                <input placeholder="Nombre" className="form-control" type="text" style={{    margin: "10px"}}/>
                <input placeholder="Correo" className="form-control" type="text" style={{    margin: "10px"}} />
                <textarea placeholder="Mensaje" className="form-control" type="text"  style={{resize:"none" ,   margin: "10px"}}/>
              </div>
              <div className="col-4">
                <img src="./src/assets/img/perro y gato juntos contactos.png" alt="" />
                <div className=" textCenter" style={{width:"466px"}}>
     
      <a href="/" className="whiteColor radius8 greenBg" style={{ padding: "10px 15px" }}>
                ENVIAR
              </a>
      </div>
              </div>
            </div>
          </div>
          </div>   
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  width: 100%;
`;
const HeaderInfo = styled.div`
  padding: 70px 0 30px 0;
  @media (max-width: 860px) {
    text-align: center;
  }
`;
const Form = styled.form`
  padding: 70px 0 30px 0;
  input,
  textarea {
    width: 100%;
    background-color: transparent;
    border: 0px;
    outline: none;
    box-shadow: none;
    border-bottom: 1px solid #707070;
    height: 30px;
    margin-bottom: 30px;
  }
  textarea {
    min-height: 100px;
  }
  @media (max-width: 860px) {
    padding: 30px 0;
  }
`;
const ButtonInput = styled.input`
  border: 1px solid #7620ff;
  background-color: #7620ff;
  width: 100%;
  padding: 15px;
  outline: none;
  color: #fff;
  :hover {
    background-color: #580cd2;
    border: 1px solid #7620ff;
    color: #fff;
  }
  @media (max-width: 991px) {
    margin: 0 auto;
  }
`;
const ContactImgBox = styled.div`
  max-width: 180px; 
  align-self: flex-end; 
  margin: 10px 30px 10px 0;
`;
const SumbitWrapper = styled.div`
  @media (max-width: 991px) {
    width: 100%;
    margin-bottom: 50px;
  }
`;









