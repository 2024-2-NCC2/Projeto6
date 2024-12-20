import React, { useState } from "react";
import styled from "styled-components";
import Seta from '../assets/icon_seta.png';
import ProdutosInteresse from "../Components/ProdutosInteresse";

const Container = styled.div`
  padding-top: 20px;
  margin: 0 auto;
  width: 80%;
`;

const TitleContainer = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;

  @media (max-width: 768px) {
    margin-left: 40px;
  }

  @media (max-width: 480px) {
    margin-left: 20px;
  }
`;

const Title = styled.h2`
  font-family: 'Inter';
  font-style: italic;
  font-weight: 700;
  font-size: 32px;
  line-height: 39px;
  color: #000000;
  text-decoration: underline;
  text-align: left;
  margin: 0;

  /* Responsividade */
  @media (max-width: 768px) {
    font-size: 24px;
  }

  @media (max-width: 480px) {
    font-size: 18px;
  }
`;

const ImagemEstilizada = styled.img`
  width: 32px;
  height: 32px;
  transform: ${(props) => (props.isOpen ? "rotate(180deg)" : "rotate(90deg)")}; // Rotaciona baseado no estado
  transition: transform 0.3s ease;
  margin-right: 10px; 

  /* Responsividade */
  @media (max-width: 768px) {
    width: 24px;
    height: 24px;
  }

  @media (max-width: 480px) {
    width: 18px;
    height: 18px;
  }
`;

const Subtitulos = styled.section`
  margin: 16px 32px;
  padding: 16px;
  border-left: 4px solid #2C5431;
  background-color: #f9f9f9;
  border-radius: 8px;
  display: ${(props) => (props.isOpen ? "block" : "none")}; // Exibe ou oculta baseado no estado

  @media (max-width: 768px) {
    margin: 12px 16px;
    padding: 12px;
  }

  @media (max-width: 480px) {
    margin: 8px 12px;
    padding: 8px;
  }
`;

const Sub = styled.h3`
  font-family: 'Inter';
  font-weight: 600;
  font-size: 24px;
  line-height: 32px;
  color: #333333;
  margin-bottom: 300px; 

  @media (max-width: 768px) {
    font-size: 20px;
  }

  @media (max-width: 480px) {
    font-size: 16px;
  }
`;

function HistoricoProdutos({user}) {
  const [isListVisible, setIsListVisible] = useState(false);

  // Função que alterna a visibilidade
  const toggleListVisibility = () => {
    setIsListVisible(!isListVisible); // Inverte o estado atual
  };

  return (
    <Container>
      <TitleContainer onClick={toggleListVisibility}>
        <ImagemEstilizada src={Seta} alt="Seta" isOpen={isListVisible} />
        <Title>Histórico de Produtos</Title>
      </TitleContainer>
      <Subtitulos isOpen={isListVisible}>
        <ProdutosInteresse user={user}>Solicitados</ProdutosInteresse>
        {/* <Sub>Requeridos</Sub> */}
      </Subtitulos>
    </Container>
  );
}

export default HistoricoProdutos;