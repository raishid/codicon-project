import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import heroe from "../../assets/img/Grupo 349.svg";
import elegir from "../../assets/img/modo elección.svg";

import axios from '../../services/axios'

export default function Login( ) {
    const [show, setShow] = useState(false);

    const [formData, setFormData] = useState({
        correo: '',
        contraseña: ''
      });

    const handleChangeForm = (event) => {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value
        });
        
      };

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleLogin = async (event) => {
        event.preventDefault();
        
        const response = await axios.post(
            `/v1/login`,
            formData,
        )

        const { data, status } = response;

        if (status === 200) {
            handleClose();
            return;
        }
    }


    return <><a onClick={handleShow} style={{ display:"none" ,padding: "10px 30px 10px 0" }}>
    Login
  </a>
    
    
    <Modal show={show} onHide={handleClose}   centered  size="lg">
            
            <Modal.Body  className=" bsnone"  closeButton  >
            <h2 className="textCenter" style={{    width: '60vw'}}>
                        Iniciar sesión
                    </h2>
                <Log >
            <form onSubmit={handleLogin}>
                <input placeholder="Correo" name="correo" className="form-control" type="correo" style={{    margin: "15px"}} value={formData.correo} onChange={handleChangeForm}/>
                    <input placeholder="Contraseña" name="contraseña" className="form-control" type="password" style={{    margin: "15px"}} value={formData.contraseña} onChange={handleChangeForm}/>
                    {/* <a href=" "  style={{    margin: "15px"}}>¿olvidó la contraseña?</a> */}
                    <button type="submit" className="whiteColor radius8 greenBg" style={{ padding: "10px 15px", border: 0 }}>
    INICIAR SESIÓN</button>
            </form>
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