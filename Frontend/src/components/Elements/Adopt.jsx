import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import heroe from "../../assets/img/Grupo 349.svg";
import elegir from "../../assets/img/modo elección.svg";

export default function Adopt( ) {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    return <> <a onClick={handleShow} className="whiteColor radius8 greenBg" style={{ padding: "10px 15px" }}>
    ADOPTAR
</a>
    
    <Modal show={show} onHide={handleClose}    size="lg">
            <Modal.Header closeButton >
                <Modal.Title>
                    <h2 className="textCenter" style={{    width: '50vw'}}>
                        ¿Cómo deseas adoptar?
                    </h2>
                </Modal.Title>
            </Modal.Header >
            <Modal.Body className="row bsnone" style={{padding: '0'}}    >
                <a href="/" className="col-6 select-modal purpleBg" style={{    height: '60vh'}}>
                    <img src={elegir} alt="" />
                </a>
                <a href="/" className="col-6 select-modal greenBg">
                <img src={heroe} alt="" />
                </a>
            </Modal.Body>
            
        </Modal></>;
  }


