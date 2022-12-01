import { Heading } from "components/atoms/Heading/Heading";
import Paragraph from "components/atoms/Paragraph/Paragraph";
import styled from "styled-components";
import car from "assets/images/car-blue.svg";
import scooter from "assets/images/scooter.svg";
import motorcycle from "assets/images/motorcycle.svg";
import { MyNavigation } from "components/organisms/Navigation/Navigation";
import { Footer } from "components/organisms/Footer/Footer";
const FleetWrapper = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 80vh;
  text-align: center;
`;

const FleetInner = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 4rem;
  @media (min-width: ${({ theme }) => theme.breakpoints.laptop}) {
    flex-direction: row;
  }
`;

const Image = styled.img`
  @media (min-width: ${({ theme }) => theme.breakpoints.laptop}) {
    height: 300px;
  }
`;

const Item = styled.div`
  width: 100%;
  max-width: 300px;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const StyledHeading = styled(Heading)`
  margin-bottom: 4rem;
`;

export const Fleet = () => {
  return (
    <>
      <MyNavigation />
      <FleetWrapper>
        <StyledHeading>Nasza flota</StyledHeading>
        <FleetInner>
          <Item>
            <Paragraph>Szybkie samochody</Paragraph>
            <Image src={car} />
          </Item>
          <Item>
            <Paragraph>Motocykle</Paragraph>
            <Image src={motorcycle} />
          </Item>
          <Item>
            <Paragraph>Hulajnogi elektryczne</Paragraph>
            <Image src={scooter} />
          </Item>
        </FleetInner>
      </FleetWrapper>
      <Footer />
    </>
  );
};
