import React from "react";
import add from "assets/images/icons/add.svg";
import styled, { css } from "styled-components";
import restaurant from "assets/images/restaurant.jpg";
import { Heading } from "components/atoms/Heading/Heading";
import { Span } from "components/atoms/Span/Span";
import { DishesCard } from "interfaces/DishesCard";
const RestaurantCardWrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3rem;
`;
const CardInner = styled.div`
  display: flex;
  position: relative;
  cursor: pointer;
  width: 90%;
  &::before {
    overflow: hidden;
    content: "";
    position: absolute;
    inset: 0;
    border-radius: 50px;
    padding: 3px;
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
  @media (min-width: ${({ theme }) => theme.breakpoints.laptop}) {
    width: 40%;
  }
`;
const Image = styled.img`
  max-width: 290px;
  max-height: 220px;
  border-radius: 50px 0 0 50px;
  ${({ icon }) =>
    icon &&
    css`
      width: 32px;
    `}
`;

const CardDetail = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 1.5rem 2rem;
  width: 100%;
`;

const InnerCardDetail = styled.div`
  display: flex;
  align-items: center;
  gap: 1.4rem;
  ${({ isDishes }) =>
    isDishes &&
    css`
      justify-content: space-between;
      gap: 0;
      width: 100%;
    `}
`;

export const RestaurantCardList: React.FC = () => {
  return (
    <RestaurantCardWrapper>
      <CardInner>
        <Image src={restaurant} />
        <CardDetail>
          <Heading>Restaurant</Heading>
          <InnerCardDetail>
            <Span restaurant>10,00 pln</Span>
            <Span restaurant>Obiad, śniadania</Span>
            <Span restaurant>Kraków</Span>
          </InnerCardDetail>
        </CardDetail>
      </CardInner>
    </RestaurantCardWrapper>
  );
};

export const DishesCardList: React.FC<DishesCard> = ({ isDishes }) => {
  return (
    <RestaurantCardWrapper>
      <CardInner>
        <Image src={restaurant} />
        <CardDetail>
          <Heading>Hamburger</Heading>
          <InnerCardDetail isDishes={isDishes}>
            <Span restaurant>10,00 pln</Span>
            <Image icon src={add} />
          </InnerCardDetail>
        </CardDetail>
      </CardInner>
    </RestaurantCardWrapper>
  );
};
