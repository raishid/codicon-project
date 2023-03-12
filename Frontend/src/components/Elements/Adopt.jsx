import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import heroe from "../../assets/img/Grupo 349.svg";
import elegir from "../../assets/img/modo elección.svg";
import dogbox from "../../assets/img/dogbox.jpg";
import family from "../../assets/img/foto en caja 3.jpg";
import superperro from "../../assets/img/perrito super heroe.svg";
import verifyperro from "../../assets/img/perro validador.svg";
import perrofeliz from "../../assets/img/felicidades perrito.png";
import perrosearch from "../../assets/img/perrito-buscando.png";
import SelectCarousel from "../Elements/SelectCarousel";
import ciudades from "../../contants/ciudades";
import perritos from "../../contants/perritos";

export default function Adopt( ) {
    const [show, setShow] = useState(false);
    const [choose, setChoose] = useState("block");
    const [hero1, setHero1] = useState("none");
    const [form, setform] = useState("none");
    const [confirm, setconfirm] = useState("none");
    const [fin, setfin] = useState("none");
    const [select1 , setselect ] = useState("none");

    const [perrito, setPerrito] = useState({});
    const [ ciudadSelect, setCiudadSelect ] = useState("Caracas");

    const [ isHero, setIsHero ] = useState(false);

    const [usuarioAdoptante, setUsuarioAdoptante] = useState({
        nombre: "",
        correo: "",
        telefono: "",
        direccion: "",
    })

    const handleChangeAdoptante = (event) => {
        setUsuarioAdoptante({
            ...usuarioAdoptante,
            [event.target.name]: event.target.value
        })
    }

    const handleClose = () =>{
        setShow(false);
        setChoose("block"); setHero1("none") ;setconfirm("none"); setfin("none");setselect("none") 
    } 
    const handleShow = () => {
        setShow(true);
        setChoose("block");
    }
       
    const Showhero1 = () =>{ 
        setIsHero(true);
        setChoose("none"); setHero1("block");setform("none")
    }
    const Showselect = () =>{
        setIsHero(false);
        setChoose("none"); setselect("block");setform("none")
    }
    const Showchoose=() =>{setChoose("block"); setHero1("none"); setselect("none"); setform("none") }
    const Showform=(perrito = null) =>{
        if(isHero){
            perritoAleatorioByCiudad();
        }else{
            setPerrito(perrito);
        }

        setform("block"); setHero1("none") ; setselect("none");setconfirm("none")
    }
    const Showconfirm=() =>{setconfirm("block"); setform("none") ; setfin("none")}
    const Showfin=() =>{setfin("block"); setconfirm("none") }

    const handleCiudad = (event) => {
        setCiudadSelect(event.target.value);
    }

    const perritoAleatorioByCiudad = () => {
        const perritosByCiudad = perritos.filter(perrito => perrito.ciudad === ciudadSelect);
        const perritoAleatorio = perritosByCiudad[Math.floor(Math.random() * perritosByCiudad.length)];
        setPerrito(perritoAleatorio);
    }

    


    return <> <a onClick={handleShow} className="whiteColor radius8 greenBg" style={{ padding: "10px 15px" }}>
    ADOPTAR
</a>
    
    <Modal show={show} onHide={handleClose} centered   size="lg">
        <div style={{display:choose}}>
        <Modal.Header closeButton >
                <Modal.Title>
                    <h2 className="textCenter" style={{    width: '50vw'}}>
                        ¿Cómo deseas adoptar?
                    </h2>
                </Modal.Title>
            </Modal.Header >
            <Modal.Body className="row bsnone" style={{padding: '0'}}    >
                <a onClick={Showselect} className="col-6 grid select-modal purpleBg" style={{    height: '45vh'}}>
                    <img src={elegir} alt="" />
                    <h5 className="textCenter">
                        Elección
                    </h5>
                </a>
                <a onClick={Showhero1} className="col-6 grid select-modal coralBg">
                <img src={heroe} alt="" />
                <h5 className="textCenter">
                  Ser un Héroe
                    </h5>
                </a>
            </Modal.Body>
        </div>
            
        <div style={{display:hero1}}>
       

        
            <Modal.Body className="row bsnone" style={{padding: '0'}}    >
                <div className="row bsnone">
                    <div className="col-md-8" style={{margin:"50px 0 0 0"}}>
                        <h2 className="textCenter" style={{    margin:"30px 0px;"}}>¿En donde buscamos?</h2>
                            <Log >
                            
                             <select className="form-control" onChange={handleCiudad}>
                             {ciudades.map((ciudad, index) => (
                                    <option key={index} value={ciudad}>{ciudad}</option>
                                ))}
                             </select>
                                {/* <p href=" " className="purpleColor" style={{    margin: "15px"}}>caracterizado principalmente por ser</p>
                                <div className="row flexSpaceCenter">
                                    <div className=" form-check col-md-3"  >
                                        <input type="checkbox" id="huey" className="form-check-input"/>
                                        <label className="purpleColor form-check-label" for="huey">Juguetón</label>
                                    </div>
                                    <div className=" form-check col-md-3"   >
                                        <input type="checkbox" id="huey" className="form-check-input"/>
                                        <label className="purpleColor form-check-label" for="huey">Calmado</label>
                                    </div>
                                    <div className=" form-check col-md-3">
                                        <input type="checkbox" id="huey" className="form-check-input"/>
                                        <label className="purpleColor form-check-label" for="huey">Travieso</label>
                                    </div>
                                    
                                </div> */}
                                

                                <div className="flex" style={{margin:"30px 0px 0px 0px"}} >
                                    <a onClick={Showchoose} className="whiteColor radius8 greenBg" style={{ padding: "10px 15px", margin:"0 10px 0 10px"}}>
                                    ATRÁS</a>
                                    <a onClick={Showform} className="whiteColor radius8 greenBg" style={{ padding: "10px 15px", margin:"0 10px 0 10px" }}>
                                    SIGUIENTE</a>
                                </div>
                    
                            </Log>
                    </div>
                    <div className="col-md-4">
                        <Dogbox src={dogbox} alt="" style={{height:"100%"}} />
                    </div>
            
                </div>
            </Modal.Body>
        </div>
        <div style={{display:select1}}>
        

        
            <Modal.Body className="row whiteBg bsnone" style={{padding: '0'}}    >
            <SelectCarousel
            action={Showform}>
       
       </SelectCarousel>
         
       <div className="flexCenter" style={{margin:"00px 0px 20px "}} >
                                    <a onClick={Showchoose} className="whiteColor radius8 greenBg" style={{ padding: "10px 15px", margin:"0 10px 0 10px"}}>
                                    ATRÁS</a>
                                    
                                </div>
                    
            </Modal.Body>
        </div>

        <div style={{display:form}}>
       

        
            <Modal.Body className="row bsnone" style={{padding: '0'}}    >
                <div className="row bsnone">
                <div className="col-md-4">
                        <Dogbox src={family} alt="" style={{height:"100%"}} />
                    </div>
                    <div className="col-md-8" style={{margin:"50px 0 0 0"}}>
                        <div className="col-3" style={{margin:"auto"}}>
                            <Logo src="./src/assets/svg/logo onbox.svg" alt="" />
                        </div>
                 
                        <h2 className="textCenter" style={{margin:"30px 0px;"}}>Datos para adoptar</h2>
                            <Log  style={{margin:"15px auto"}}>
                            
                            <input placeholder="Nombre completo" name="nombre" className="form-control" type="text" style={{    margin: "15px"}} onChange={handleChangeAdoptante}/>
                <input placeholder="Correo de quien recibe" name="correo" className="form-control" type="email" style={{    margin: "15px"}} onChange={handleChangeAdoptante}/>
                <input placeholder="Teléfono de quien recibe" name="telefono" className="form-control" type="text" style={{    margin: "15px"}} onChange={handleChangeAdoptante}/>
                <input placeholder="Dirección de envío" name="direccion" className="form-control" type="text" style={{    margin: "15px"}} onChange={handleChangeAdoptante}/>
                                

                                <div className="flex" style={{margin:"30px 0px 0px 0px"}} >
                                    <a onClick={Showchoose} className="whiteColor radius8 greenBg" style={{ padding: "10px 15px", margin:"0 10px 0 10px"}}>
                                    ATRÁS</a>
                                    <a onClick={Showconfirm} className="whiteColor radius8 greenBg" style={{ padding: "10px 15px", margin:"0 10px 0 10px" }}>
                                    SIGUIENTE</a>
                                </div>
                    
                            </Log>
                    </div>
                    
            
                </div>
            </Modal.Body>
        </div>
        <div style={{display:confirm}}>
       

        
            <Modal.Body className="row bsnone"     >
                <div className="row bsnone">
                    <div className="col-12 textCenter">
                    <h2 className="textCenter" style={{margin:"30px 0px;"}}>Confirmación de datos</h2>
                    </div>
                <div className="col-sm-6" style={{margin:"30px 0 0 0"}}>
                        <ConfirmDiv>
                            <h5 className="purpleColor textCenter">Datos de la mascota</h5>
                            <div style={{ padding: "15px 0px"}}> 
                                <p className="purpleColor" >Nombre</p>
                                <p>⭐ {perrito.nombre}</p>
                            </div>
                            <div style={{ padding: "15px 0px"}}> 
                                <p className="purpleColor" >Lugar</p>
                                <p>⭐ {perrito.ciudad}</p>
                            </div>
                            <div style={{ padding: "15px 0px"}}>
                            <p className="purpleColor" > Características</p>
                            {/*print map cualidades */}
                            {perrito.cualidades?.map((cualidad, index) => {
                                return (
                                    <p key={index}>⭐ {cualidad}</p>
                                )
                            })}
                            <div>
                                <div>
                                <Superperro src={superperro} alt="" height="140px" />
                                </div>
                            </div>
                            
                            </div>
                        </ConfirmDiv>
                    </div>
                    <div className="col-sm-6" style={{margin:"30px 0 0 0"}}>
                    <ConfirmDiv>
                            <h5 className="purpleColor textCenter">Datos del dueño</h5>

                            <div > 
                            <p className="purpleColor" >Nombre Completo</p>
                            <p>⭐ {usuarioAdoptante.nombre}</p>
                            </div>
                            <div > 
                            <p className="purpleColor" >Correo</p>
                            <p>⭐ {usuarioAdoptante.correo}</p>
                            </div><div> 
                            <p className="purpleColor" >Teléfono</p>
                            <p>⭐ {usuarioAdoptante.telefono}</p>
                            </div>
                            <div > 
                            <p className="purpleColor" >Dirección</p>
                            <p>⭐ {usuarioAdoptante.direccion}</p>
                            <div>
                                <div>
                                <Verifyperro src={verifyperro} alt="" height="140px" />
                                </div>
                            </div>
                            </div>
                        </ConfirmDiv>
                        
                     
                    </div>
                    <div className="flex flexCenter" style={{margin:"30px 0px 0px 0px"}} >
                                    <a onClick={Showform} className="whiteColor radius8 greenBg" style={{ padding: "10px 15px", margin:"0 10px 0 10px"}}>
                                    ATRÁS</a>
                                    <a onClick={Showfin} className="whiteColor radius8 greenBg" style={{ padding: "10px 15px", margin:"0 10px 0 10px" }}>
                                    SIGUIENTE</a>
                                </div>
            
                </div>
            </Modal.Body>
        </div>
        <div style={{display:fin}}>
       

        
            <Modal.Body className="row bsnone" style={{padding: '0'}}    >
                <div className="row bsnone">
             
                    <div className="col-md-12" style={{margin:"50px 0 0 0"}}>
                        <div className="col-2" style={{margin:"auto"}}>
                            <Logo src="./src/assets/svg/logo onbox.svg" alt="" />
                        </div>
                 
                        <h2 className="textCenter" style={{margin:"30px 0px;"}}>¡Felicidades!</h2>
                            <Log  style={{margin:"15px auto"}}>
                            <img src={perrofeliz} alt="" width="70%"/>
                       <p className="textCenter">Has dado un gran paso, ya estas más cerca de conseguir un gran amigo.</p>
                                <div className="flex" style={{margin:"30px 0px 0px 0px"}} >
                                    
                                    <a onClick={handleClose} className="whiteColor radius8 greenBg" style={{ padding: "10px 15px", margin:"0 10px 0 10px" }}>
                                    Inicio</a>
                                </div>
                    
                            </Log>
                    </div>
                    
            
                </div>
            </Modal.Body>
        </div>
        </Modal></>;
  }


  const Log = styled.div`
  max-width: 400px;
    display: grid;
    margin: 45px auto;
    justify-items: center;
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
const Dogbox = styled.img`
@media (max-width: 760px) {
    display: none;
  }
`;
const Logo = styled.img`

width: 10vw;
min-width: 130px;
@media (max-width: 900px) {
  width: 25vw;
}
`;

const ConfirmDiv = styled.div`

background: #AFDCE2 0% 0% no-repeat padding-box;
border-radius: 30px;
padding: 20px;
max-width: 222px;

`;

const Superperro = styled.img`
position: absolute;
bottom: 17%;
right: 65%;
@media (max-width: 990px) {
    display:none
  }
  
}

`;

const Verifyperro = styled.img`
position: absolute;
bottom: 17%;
left: 72%;
@media (max-width: 990px) {
   display:none
  }

}

`;