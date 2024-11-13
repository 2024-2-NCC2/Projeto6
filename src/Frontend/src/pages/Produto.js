import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Navbar from "../Components/Navbar";
import Footer from '../Components/Footer';
import DivProdutos from '../Components/DivProdutos';
import styled from 'styled-components';
import guitarra01 from '../assets/Produtos_Ficticios/guitarra01.jpg';
import guitarra02 from '../assets/Produtos_Ficticios/guitarra02.jpg';
import guitarra03 from '../assets/Produtos_Ficticios/guitarra03.jpg';
import Controle01 from '../assets/Produtos_Ficticios/Controle01.jpg';
import Controle02 from '../assets/Produtos_Ficticios/Controle02.jpg';
import Controle03 from '../assets/Produtos_Ficticios/Controle03.jpg';



const Container = styled.div`
  max-width: 800px;
  margin: 50px auto;
  padding: 20px;
  transform: translateX(-280px); 
`;

const ButtonContainer = styled.div`
  margin-bottom: 20px; 
  display: flex;
  justify-content: center;
  width: 100%;
`;

const FlexContainer = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 20px;
  position: relative;
`;

const Image = styled.img`
  width: 50%;
  max-height: 400px;
  object-fit: cover;
  border-radius: 20px;
`;

const TextContainer = styled.div`
  flex: 1;
`;

const Title = styled.h1`
  margin: 0;
`;

const Description = styled.p`
  margin-top: 10px;
  font-size: 1.2rem;  
  font-family: 'Arial', sans-serif; 
  color: #333;  
  line-height: 1.5;  
  text-align:justify;  `;



const AnimatedButton = styled.button`
  transform: translateX(-310px);
  position: relative;
  display: flex;
  align-items: center;
  gap: 4px;
  padding: 12px 36px;
  border: 4px solid transparent;
  font-size: 16px;
  background-color: #2C5431;
  border-radius: 100px;
  font-weight: 600;
  color: #fff;
  box-shadow: 0 0 0 2px #96AF9F;
  cursor: pointer;
  overflow: hidden;
  transition: all 0.6s cubic-bezier(0.23, 1, 0.32, 1);

  &:hover {
    box-shadow: 0 0 0 12px transparent;
    color: #fff;
    border-radius: 12px;
  }

  &:active {
    scale: 0.95;
    box-shadow: 0 0 0 4px greenyellow;
  }

  .arr-1 {
    transform: scaleX(-1);
    position: absolute;
    right: 13px;
    width: 22px;
    fill: #fff;
    z-index: 9;
    transition: all 0.8s cubic-bezier(0.23, 1, 0.32, 1);
  }

  .arr-2 {
    transform: scaleX(-1);
    position: absolute;
    left: -25%;
    width: 24px;
    fill: #fff;
    z-index: 9;
    transition: all 0.8s cubic-bezier(0.23, 1, 0.32, 1);
  }

  .circle {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 10px;
    height: 10px;
    border-radius: 50%;
    opacity: 0;
    transition: all 0.8s cubic-bezier(0.23, 1, 0.32, 1);
  }

  .text {
    position: relative;
    z-index: 1;
    transform: translateX(-12px);
    transition: all 0.8s cubic-bezier(0.23, 1, 0.32, 1);
  }

  &:hover .arr-1 {
    right: -25%;
  }

  &:hover .arr-2 {
    left: 16px;
  }

  &:hover .text {
    transform: translateX(12px);
  }

  &:hover .circle {
    width: 220px;
    height: 220px;
    opacity: 1;
  }
`;

const productData = {
  1: {
    id: 1,
    title: '1º Item',
    description: 'Detalhes do 1º Item',
    images: [guitarra01, guitarra02, guitarra03],
  },
  2: {
    id: 2,
    title: 'Controle PS4',
    description: (
      <>
        Controle PS4 Usado - Excelente Estado! <br />
        Está procurando um controle de PS4 em ótimo estado e com preço acessível? Temos o que você precisa!<br />
        Nosso controle usado oferece toda a funcionalidade de um controle novo, com desempenho de alta qualidade.<br />
        Ele foi cuidadosamente verificado, garantindo que você tenha uma experiência de jogo incrível, sem comprometer seu bolso.
      </>
    ),
    
    images: [Controle01, Controle02, Controle03],
  },
  3: {
    id: 3,
    title: '3º Item',
    description: 'Detalhes do 3º Item',
    images: [guitarra01, guitarra02, guitarra03],
  },
};

function Produto() {
  const { id } = useParams();
  const navigate = useNavigate();
  const product = productData[id];
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  useEffect(() => {
    if (product && product.images) {
      const interval = setInterval(() => {
        setActiveImageIndex((prevIndex) => (prevIndex + 1) % product.images.length);
      }, 3000);
      return () => clearInterval(interval);
    }
  }, [product]);

  const handleBack = () => {
    navigate(-1);
  };

  return (
    <div>
      <Navbar />
      <Container>
        <ButtonContainer>
          <AnimatedButton onClick={handleBack}>
            <svg className="arr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z" />
            </svg>
            <span className="text">VOLTAR</span>
            <span className="circle"></span>
            <svg className="arr-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z" />
            </svg>
          </AnimatedButton>
        </ButtonContainer>

        {product ? (
          <FlexContainer>
            <Image
              src={product.images[activeImageIndex]} 
              alt={`${product.title} - Imagem ${activeImageIndex + 1}`}
            />
            <TextContainer>
              <Title>{product.title}</Title>
              <Description>{product.description}</Description>
            </TextContainer>
          </FlexContainer>
        ) : (
          <p>Produto não encontrado.</p>
        )}
      </Container>
      <DivProdutos images={Object.values(productData).filter(p => p.id !== parseInt(id))} />
      <Footer />
    </div>
  );
}


export default Produto;
