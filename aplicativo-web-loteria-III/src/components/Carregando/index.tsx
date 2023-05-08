import { useEffect, useState } from "react";
import styled, { keyframes } from "styled-components";

export function Carregando({ dataApuracao }: any) {
  const [carregando, setCarregando] = useState(true);

  useEffect(() => {
    if (dataApuracao) {
      setCarregando(false);
    }
  }, [dataApuracao]);

  return (
    <>
      {carregando && (
        <Container>
      
          <Carregar>Carregando...</Carregar>

        </Container>
      )}
    </>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const rotate = keyframes`
    0% {
      transform: rotate(0);
      animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
    }
    50% {
      transform: rotate(900deg);
      animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
    }
    100% {
      transform: rotate(1800deg);
    }
`;

const spii = keyframes`
.spii{
  from {
      transform: rotate(0turn);
  }

  to {
      transform: rotate(1turn);
  }
}
`;

const Carregar = styled.div`
    &{
      display: inline-block;
      position: relative;
      width: 80px;
      height: 80px;
      animation: ${rotate};
      animation: ${spii};
    }

    &:after {
      content: " ";
      display: block;
      border-radius: 50%;
      width: 0;
      height: 0;
      margin: 8px;
      box-sizing: border-box;
      border: 32px solid #fff;
      border-color: #fff transparent #fff transparent;
      animation: lds-hourglass 1.2s infinite;
      background-color: green;
    }

    @media (prefers-reduced-motion: no-preference) {
        animation: spii infinite 1s linear;
    }
  
`;

const Escrita = styled.div`
  font-size: x-large;
  font-weight: bold;
`;

