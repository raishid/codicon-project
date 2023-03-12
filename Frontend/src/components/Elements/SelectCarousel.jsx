import React, { useCallback } from 'react'
import useEmblaCarousel from 'embla-carousel-react'

import DogBox from "./DogBox";
import FullButton from "../Buttons/FullButton";
// Assets
import styled from "styled-components";
import ProjectImg1 from "../../assets/img/pets/foto 1.png";
import ProjectImg2 from "../../assets/img/pets/foto 2.png";
import ProjectImg3 from "../../assets/img/pets/foto 3.png";
import ProjectImg4 from "../../assets/img/pets/foto 4.png";







export default  function SelectCarousel ({action}){
  const [emblaRef, emblaApi] = useEmblaCarousel()

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev()
  }, [emblaApi])

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext()
  }, [emblaApi])

  return (
    <Embla className="embla">
      <div className="embla__viewport" ref={emblaRef}>
        <EmblaContainer className="embla__container  ">
        <DogBox className="embla__slide Select_slide "
              img={ProjectImg1}
              tamano="Mediano"
              raza="mestizo"
              Nombre="Junior"
              Sexo="Macho"
              ciudad=" Valencia, Venezuela"
              action={action}
            /><DogBox className="embla__slide Select_slide  "
            img={ProjectImg2}
              tamano="Mediano"
              raza="Bulldog"
              Nombre="Cacha"
              Sexo="Macho"
              ciudad=" Valencia, Venezuela"
              action={action}
          /><DogBox className="embla__slide Select_slide  "
          img={ProjectImg3}
              tamano="Grande"
              raza="mestizo"
              Nombre="Tom"
              Sexo="Macho"
              ciudad=" Caracas, Venezuela"
              action={action}
        /><DogBox className="embla__slide  Select_slide "
        img={ProjectImg4}
              tamano="Pequeño"
              raza="mestizo"
              Nombre="Sofi"
              Sexo="Hembra"
              ciudad=" Valencia, Venezuela"
              action={action}
      />
        </EmblaContainer>
      </div>
    
    </Embla>
  )
}

const Embla =styled.section`
max-width: 85vw;
    margin: auto;`;


const EmblaContainer = styled.section`
 
    
`;

const Wrapper = styled.section`
  width: 100%;
`;
const HeaderInfo = styled.div`
  @media (max-width: 860px) {
    text-align: center;
  }
`;
const Advertising = styled.div`
  padding: 100px 0;
  margin: 100px 0;
  position: relative;
  @media (max-width: 1160px) {
    padding: 60px 0 40px 0;
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
  position: relative;
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
  @media (max-width: 860px) {
    width: 80%;
    order: 2;
  }
`;
const AddLeftInner = styled.div`
  width: 100%;
  position: absolute;
  top: -300px;
  left: 0;
  @media (max-width: 1190px) {
    top: -250px;
  }
  @media (max-width: 920px) {
    top: -200px;
  }
  @media (max-width: 860px) {
    order: 1;
    position: relative;
    top: -60px;
    left: 0;
  }
`;
const ImgWrapper = styled.div`
  width: 100%;
  padding: 0 15%;
  img {
    width: 100%;
    height: auto;
  }
  @media (max-width: 400px) {
    padding: 0;
  }
`;
