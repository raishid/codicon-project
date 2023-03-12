import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import heroe from "../../assets/img/Grupo 349.svg";
import elegir from "../../assets/img/modo elección.svg";

export default function Login( ) {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    return <><a onClick={handleShow} style={{ padding: "10px 30px 10px 0" }}>
    Login
  </a>
    
    
    <Modal show={show} onHide={handleClose}   centered  size="lg">
            
            <Modal.Body  className=" bsnone"  closeButton  >
            <h2 className="textCenter" style={{    width: '60vw'}}>
                        Iniciar sesión
                    </h2>
                <Log >
                
            <input placeholder="Nombre" className="form-control" type="text" style={{    margin: "15px"}}/>
                <input placeholder="Correo" className="form-control" type="text" style={{    margin: "15px"}} />
                <a href=" "  style={{    margin: "15px"}}>¿olvidó la contraseña?</a>
                <a onClick={handleShow} className="whiteColor radius8 greenBg" style={{ padding: "10px 15px" }}>
INICIAR SESIÓN</a>
                </Log>
        
            </Modal.Body>
            
        </Modal></>;
  }

  const Log = styled.div`
  max-width: 350px;
    display: grid;
    margin: 45px auto;
    justify-items: center;
`;