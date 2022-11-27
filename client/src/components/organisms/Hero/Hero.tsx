import styled from "styled-components";
import Heading from "components/atoms/Heading/Heading";
import Paragraph from "components/atoms/Paragraph/Paragraph";
import Button from "components/atoms/Button/Button";
import shoppingOnline from "assets/images/online-shop.svg";
const HeroWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
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
  max-width: 400px;
`;

export const Hero: React.FC = () => {
  return (
    <>
      <HeroWrapper>
        <HeroInner>
          <Heading title>
            Najszybsza dostawa <br /> Najlepszego jedzenia
          </Heading>
          <Paragraph>Dołącz do nas już teraz!</Paragraph>
          <Button>Zamów online</Button>
        </HeroInner>
        <HeroImage src={shoppingOnline} />
      </HeroWrapper>
    </>
  );
};
