import styled from "styled-components";
import { Heading } from "components/atoms/Heading/Heading";
import Paragraph from "components/atoms/Paragraph/Paragraph";
import Button from "components/atoms/Button/Button";
import shoppingOnline from "assets/images/online-shop.svg";
import { Span } from "components/atoms/Span/Span";
import { useState } from "react";
const HeroWrapper = styled.div`
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

export const Hero: React.FC = () => {
  const [isLogin, setIsLogin] = useState(false);
  return (
    <>
      <HeroWrapper>
        <HeroInner>
          <Heading title>
            Najszybsza dostawa <br /> Najlepszego jedzenia
          </Heading>
          <Paragraph>Dołącz do nas już teraz!</Paragraph>
          <Button>Zamów online</Button>
          {
            isLogin && <Span error>Wygląda na to, że nie jesteś zalogowany!</Span>
          }
        </HeroInner>
        <HeroImage src={shoppingOnline} />
      </HeroWrapper>
    </>
  );
};
