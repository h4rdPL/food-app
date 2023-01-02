import React from "react";
import add from "assets/images/icons/add.svg";
import styled, { css } from "styled-components";
import restaurant from "assets/images/restaurant.jpg";
import { Heading } from "components/atoms/Heading/Heading";
import { Span } from "components/atoms/Span/Span";
import { DishesCard } from "interfaces/DishesCard";
import { Link } from "react-router-dom";
import { useShoppingCart } from "context/shoppingCartContext";

const Card = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  cursor: pointer;
  width: 70%;
  @media (min-width: ${({ theme }) => theme.breakpoints.laptop}) {
    flex-direction: row;
  }
  &::before {
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
  max-height: 220px;
  border-radius: 50px 50px 0 0;
  @media (min-width: ${({ theme }) => theme.breakpoints.laptop}) {
    max-width: 290px;
    border-radius: 50px 0 0 50px;
  }
  ${({ icon }) =>
    icon &&
    css`
      width: 32px;
    `}
`;

const CardDetail = styled.div`
  display: flex;
  gap: 1rem;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  padding: 1.5rem 2rem;
  text-align: center;
  @media (min-width: ${({ theme }) => theme.breakpoints.laptop}) {
    text-align: left;
  }
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
interface MyInterface {
  name: string;
  type: string;
  city: string;
  restaurantId: string | number;
}

export const RestaurantCardList: React.FC<MyInterface> = ({
  name,
  type,
  city,
  restaurantId,
}: any) => {
  return (
    <Card as={Link} to={`${restaurantId}`}>
      <Image src={restaurant} />
      <CardDetail>
        <Heading>{name}</Heading>
        <InnerCardDetail isDishes={false}>
          {/* <Span restaurant>10,00 pln</Span> */}
          <Span restaurant>{type}</Span>
          <Span restaurant>{city}</Span>
        </InnerCardDetail>
      </CardDetail>
    </Card>
  );
};

export const DishesCardList: React.FC<DishesCard> = ({
  id,
  dishName,
  dishPrice,
}) => {
  // console.log(data);
  const {
    getItemQuantity,
    increaseCartQuantity,
    // decreaseQuantity,
    // removeFromCard,
  } = useShoppingCart();
  const quantity = getItemQuantity(id);
  return (
    <>
      <Card
        onClick={() => increaseCartQuantity(id, dishName, dishPrice, quantity)}
      >
        <Image src={restaurant} />
        <CardDetail>
          <Heading>{dishName}</Heading>
          <InnerCardDetail isDishes={true}>
            <Span restaurant>{dishPrice} pln</Span>

            {/* <Image src={add} icon /> */}
          </InnerCardDetail>
        </CardDetail>
      </Card>
      <span>{quantity}</span>
    </>
  );
};
