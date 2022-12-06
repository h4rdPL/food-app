import React, { useState } from "react";
import { Heading, SubHeading } from "components/atoms/Heading/Heading";
import Paragraph from "components/atoms/Paragraph/Paragraph";
import styled from "styled-components";
import close from "assets/images/icons/close.svg";
import Button from "components/atoms/Button/Button";
const UserWrapper = styled.div`
  min-height: 80vh;
  width: 80%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0 auto;
`;
const UserInner = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;

const StyledHeading = styled(SubHeading)`
  position: relative;
  width: 100%;
  padding: 0.8rem 2rem;
  margin-top: 3rem;
  &::before {
    content: "";
    position: absolute;
    inset: 0;
    border-radius: 10px;
    padding: 2px;
    background: linear-gradient(
      45deg,
      ${({ theme }) => theme.orangeGradient} -50%,
      ${({ theme }) => theme.yellowGradient} 220%
    );
    -webkit-mask: linear-gradient(#fff 0 0) content-box,
      linear-gradient(#fff 0 0);
    -webkit-mask-composite: xor;
    mask-composite: exclude;
    cursor: pointer;
  }
`;

const Summary = styled.div`
  margin-top: 3rem;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const SummaryItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const PriceWrapper = styled.span`
  display: flex;
  align-items: center;
  gap: 2rem;
  align-items: flex-end;
`;

const TotalWrapper = styled.div`
  display: flex;
  gap: 1.5rem;
  flex-direction: column;
  align-items: flex-end;
  margin-top: 3.5rem;
`;

const Image = styled.img`
  cursor: pointer;
  align-self: center;
`;
const StyledParagraph = styled(Paragraph)`
  text-align: center;
  margin-top: 2rem;
`;
export const User = () => {
  const [isEmpty, setIsEmpty] = useState(true);

  // eslint-disable-next-line no-lone-blocks
  {
    if (isEmpty) {
      return (
        <UserWrapper>
          <Heading title>
            Dzień dobry, <br /> użytkownik
          </Heading>
          <UserInner>
            <StyledHeading>Podsumowanie</StyledHeading>
            <Summary>
              <SummaryItem>
                <Paragraph>Hamburger</Paragraph>
                <PriceWrapper>
                  <Paragraph>10PLN</Paragraph>
                  <Image src={close} />
                </PriceWrapper>
              </SummaryItem>
              <SummaryItem>
                <Paragraph>Hamburger</Paragraph>
                <PriceWrapper>
                  <Paragraph>10PLN</Paragraph>
                  <Image src={close} />
                </PriceWrapper>
              </SummaryItem>
              <SummaryItem>
                <Paragraph>Hamburger</Paragraph>
                <PriceWrapper>
                  <Paragraph>10PLN</Paragraph>
                  <Image src={close} />
                </PriceWrapper>
              </SummaryItem>
              <TotalWrapper>
                <SubHeading>Razem: 40.00PLN</SubHeading>
                <Button>Kup teraz</Button>
              </TotalWrapper>
            </Summary>
          </UserInner>
        </UserWrapper>
      );
    } else {
      return (
        <UserWrapper>
          <Heading title>
            Dzień dobry, <br /> użytkownik
          </Heading>
          <UserInner>
            <StyledHeading>Podsumowanie</StyledHeading>
            <StyledParagraph>Nie ma zamówień</StyledParagraph>
          </UserInner>
        </UserWrapper>
      );
    }
  }
};
