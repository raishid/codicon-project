import React from "react";
import styled from "styled-components";

export default function ProjectBox({className, img, title, text, action,mode}) {
  return (
    <Wrapper className={className} >
      <ImgBtn className="aniamte pointer" onClick={action ? () => action() : null}>
        <img className="" src={img} alt="project"></img>
      </ImgBtn>
      <div style={{padding:20}}>
      <Row>
        <Col5>
        <h3 className="font20 extraBold ">{title}</h3>
      <p className="font13 ">{text}</p>
        </Col5>
        <Col5>
        <img className="" src={mode} alt="project"></img>
        </Col5>
      </Row>
      </div>
     
     
      
     
    </Wrapper>
  );
}

const Row = styled.div`

display: flex;
justify-content: space-between;
`
const Col5 = styled.div`

`
const Wrapper = styled.div`
  width: 100%;
  margin-top: 30px;
  margin:30px;
  background-color:white;
  border-radius: 20px ;
  img,button {
    width: 100%;
    height: auto;
    margin: 0px 0;
    border-radius: 20px 20px 0px 0px;
  }
  h3 {
    padding-bottom: 10px;
    color:#6F63B7;
  }
`;
const ImgBtn = styled.button`
  background-color: transparent;
  border: 0px;
  outline: none;
  padding: 0px;
  margin: 0px;
  :hover > img {
    opacity: 0.5;
  }
`;