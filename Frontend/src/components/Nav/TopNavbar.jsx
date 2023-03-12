import React, { useEffect, useState } from "react";


import styled from "styled-components";
import { Link } from "react-scroll";

import Sidebar from "../Nav/Sidebar";
import Backdrop from "../Elements/Backdrop";
import Adopt from "../Elements/Adopt";
import Login from "../Elements/login";
// Assets
import LogoIcon from "../../assets/svg/Logo";
import BurgerIcon from "../../assets/svg/BurgerIcon";

export default function TopNavbar() {


  const [y, setY] = useState(window.scrollY);
  const [sidebarOpen, toggleSidebar] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => setY(window.scrollY));
    return () => {
      window.removeEventListener("scroll", () => setY(window.scrollY));
    };
  }, [y]);


  return (
    <>
      <Sidebar sidebarOpen={sidebarOpen} toggleSidebar={toggleSidebar} />
      {sidebarOpen && <Backdrop toggleSidebar={toggleSidebar} />}
      <Wrapper className="flexCenter animate whiteBg" style={y > 100 ? { height: "60px" } : { height: "80px" }}>
        <NavInner className="container flexSpaceCenter">
          <Link className="pointer flexNullCenter" to="home" smooth={true}>
          <Logo src="/assets/logo onbox.svg" alt="" />
          
          </Link>
          <BurderWrapper className="pointer flexSpaceCenter2" style={{width:"102vw"}} >
       
            <li className="semiBold font15 pointer flexCenter">
            <Adopt/>
            
            </li>
            <BurgerIcon onClick={() => toggleSidebar(!sidebarOpen)} />
          </BurderWrapper>
          <UlWrapper className="flexNullCenter">
            <li className="semiBold font15 pointer">
            <Link activeClass="active" style={{ padding: "10px 15px" }} to="Home" spy={true} smooth={true} offset={-80}>
                Home
              </Link>
            </li>
            <li className="semiBold font15 pointer">
              <Link activeClass="active" style={{ padding: "10px 15px" }} to="services" spy={true} smooth={true} offset={-80}>
                Beneficios
              </Link>
            </li>
            <li className="semiBold font15 pointer">
              <Link activeClass="active" style={{ padding: "10px 15px" }} to="projects" spy={true} smooth={true} offset={-80}>
                Adoptados
              </Link>
            </li>
            <li className="semiBold font15 pointer">
              <Link activeClass="active" style={{ padding: "10px 15px" }} to="pricing" spy={true} smooth={true} offset={-80}>
                Adoptar
              </Link>
            </li>
            
            
          </UlWrapper>
          <UlWrapperRight className="flexNullCenter">
            <li className="semiBold font15 pointer">
             <Login/>
            </li>
            <li className="semiBold font15 pointer flexCenter">
            <Adopt/>
            
            </li>
       
          </UlWrapperRight>
        </NavInner>
      </Wrapper>
    </>
  );
}

const Wrapper = styled.nav`
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;
`;

const Logo = styled.img`

width: 10vw;
min-width: 130px;
@media (max-width: 900px) {
  width: 25vw;
}
`;
const NavInner = styled.div`
  position: relative;
  height: 100%;
`
const BurderWrapper = styled.button`
  outline: none;
  border: 0px;
  background-color: transparent;
  height: 100%;
  padding: 0 15px;
  display: none !Important;
  @media (max-width: 760px) {
    display: flex !important;
  }
`;
const UlWrapper = styled.ul`
  display: flex;
      justify-content: space-between;
    width: 40vw;
  @media (max-width: 760px) {
    display: none;
  }
`;
const UlWrapperRight = styled.ul`
  @media (max-width: 760px) {
    display: none;
  }
`;


