import React, { useState, useContext } from "react";
import { Heading, SubHeading } from "components/atoms/Heading/Heading";
import Paragraph from "components/atoms/Paragraph/Paragraph";
import styled from "styled-components";
import close from "assets/images/icons/close.svg";
import Button from "components/atoms/Button/Button";
import { AuthContext } from "context/authContext";
import { useShoppingCart } from "context/shoppingCartContext";
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
export const User = () => {
  const { currentUser } = useContext(AuthContext);
  const { cartItems, removeFromCard } = useShoppingCart();
  console.log(cartItems);
  // eslint-disable-next-line no-lone-blocks
  {
    return (
      <UserWrapper>
        <Heading title>
          Dzień dobry, <br /> {currentUser?.name}
        </Heading>
        <UserInner>
          <StyledHeading>Podsumowanie</StyledHeading>
          <Summary>
            {cartItems.map((item) => (
              // <Paragraph key={item.id} {...item} />
              <SummaryItem>
                {console.log(item)}
                <Paragraph>{item.dishName}</Paragraph>
                <PriceWrapper>
                  <Paragraph>{item.quantity}</Paragraph>
                  <Image onClick={() => removeFromCard(item.id)} src={close} />
                </PriceWrapper>
              </SummaryItem>
            ))}
            <TotalWrapper>
              <SubHeading>Razem:</SubHeading>
              <Button>Kup teraz</Button>
            </TotalWrapper>
          </Summary>
        </UserInner>
      </UserWrapper>
    );
  }
};
