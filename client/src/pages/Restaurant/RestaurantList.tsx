import {
  DishesCardList,
  RestaurantCardList,
} from "components/molecules/RestaurantCard/RestaurantCard";
import styled from "styled-components";

const RestaurantCardsWrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5rem;
`;

export const RestaurantList: React.FC = () => {
  return (
    <RestaurantCardsWrapper>
      <RestaurantCardList />
      <RestaurantCardList />
      <RestaurantCardList />
      <RestaurantCardList />
    </RestaurantCardsWrapper>
  );
};

export const CardList: React.FC = () => {
  return (
    <RestaurantCardsWrapper>
      <DishesCardList />
      <DishesCardList />
      <DishesCardList />
      <DishesCardList />
    </RestaurantCardsWrapper>
  );
};
