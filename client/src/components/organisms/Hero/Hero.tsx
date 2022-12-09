import React, { useState } from "react";
import styled, { keyframes } from "styled-components";
import Paragraph from "components/atoms/Paragraph/Paragraph";
import Button from "components/atoms/Button/Button";
import shoppingOnline from "assets/images/online-shop.svg";
import Input from "components/atoms/Input/Input";
import { Heading } from "components/atoms/Heading/Heading";
import { Span } from "components/atoms/Span/Span";
import close from "assets/images/icons/close-black.svg";
const HeroWrapper = styled.section`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  min-height: calc(100vh - 90px);
  padding: 2rem;
  @media (min-width: ${({ theme }) => theme.breakpoints.largeMobile}) {
    align-items: center;
    gap: 2rem;
  }
  @media (min-width: ${({ theme }) => theme.breakpoints.laptop}) {
    flex-direction: row;
  }
`;
const HeroInner = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.6rem;
  @media (min-width: ${({ theme }) => theme.breakpoints.laptop}) {
    gap: 1rem;
  }
`;
const HeroImage = styled.img`
  max-width: 550px;
`;

// modal
const modalAnimation = keyframes`
0% {
  transform: scale(0);
}
100% {
  transform: scale(100%);
}
`;

const ModalWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  gap: 3.2rem;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 80vh;
  width: 90%;
  border-radius: 15px;
  margin: 0px auto;
  text-align: center;
  background-color: ${({ theme }) => theme.background};
  animation: ${modalAnimation} 0.4s;
`;
const Image = styled.img`
  width: 32px;
  position: absolute;
  top: 30px;
  right: 30px;
  cursor: pointer;
`;
const SearchOrderWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  @media (min-width: ${({ theme }) => theme.breakpoints.laptop}) {
    flex-direction: row;
  }
`;
export const Hero: React.FC = () => {
  const [isLogin, setIsLogin] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);
  const [isOpen, setIsOpen] = useState<any>(false);
  const closeModal = () => {
    setIsOpen(!isOpen);
  };
  const openModal = () => {
    setIsOpen(!isOpen);
  };

  const searchRestaurant = () => {
    console.log("hey");
    if (!isLogin) {
      setIsOpen(!isOpen);
      setError(true);
    }
  };

  return (
    <>
      <HeroWrapper>
        <HeroInner>
          <Heading title>
            Najszybsza dostawa <br /> Najlepszego jedzenia
          </Heading>
          <Paragraph>Dołącz do nas już teraz!</Paragraph>
          <Button onClick={openModal}> Zamów online</Button>
          {error && <Span error>Wygląda na to, że nie jesteś zalogowany!</Span>}
          {isOpen && (
            <ModalWrapper>
              <Image onClick={closeModal} src={close} />
              <Heading>Gdzie chcesz zamówić jedzenie?</Heading>
              <SearchOrderWrapper>
                <Input placeholder="Np. Nowy Targ" />
                <Button onClick={searchRestaurant}>Szukaj restauracji</Button>
              </SearchOrderWrapper>
            </ModalWrapper>
          )}
        </HeroInner>
        <HeroImage src={shoppingOnline} />
      </HeroWrapper>
    </>
  );
};
