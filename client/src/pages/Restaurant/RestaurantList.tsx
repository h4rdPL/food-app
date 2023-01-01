import { useEffect, useState } from "react";
import {
  DishesCardList,
  RestaurantCardList,
} from "components/molecules/RestaurantCard/RestaurantCard";
import { useParams } from "react-router";
import Axios from "axios";
import styled from "styled-components";
import { MyNavigation } from "components/organisms/Navigation/Navigation";
import { Footer } from "components/organisms/Footer/Footer";
// import { useShoppingCart } from "context/shoppingCartContext";

const RestaurantCardsWrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5rem;
`;

export const RestaurantList = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await Axios.get(
          "http://localhost:8800/api/restaurant/allRestaurants"
        );
        setData(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, []);
  console.log(data);
  return (
    <>
      <MyNavigation />
      <RestaurantCardsWrapper>
        {data.map((item) => (
          <>
            <RestaurantCardList
              name={item["restaurant_name"]}
              type={item["dishes_type"]}
              city={item["address"]}
              restaurantId={item["id"]}
            />
          </>
        ))}
      </RestaurantCardsWrapper>
      <Footer />
    </>
  );
};

export const CardList: React.FC = () => {
  const [data, setData] = useState([]);
  let { id } = useParams();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await Axios.get(
          `http://localhost:8800/api/restaurant/getDishes`,
          {
            params: {
              id: id,
            },
          }
        );
        setData(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, [id]);
  console.log(data);
  // const {
  //   getItemQuantity,
  //   increaseCartQuantity,
  //   decreaseQuantity,
  //   removeFromCard,
  // } = useShoppingCart();
  // const quantity = getItemQuantity(id);

  return (
    <>
      <MyNavigation />
      {data.map((item) => (
        <>
          <RestaurantCardsWrapper>
            <DishesCardList
              key={item["id"]}
              id={item["id"]}
              dishName={item["dish_name"]}
              dishPrice={item["dish_price"]}
            />
          </RestaurantCardsWrapper>
        </>
      ))}
      <Footer />
    </>
    //   <DishesCardList />
  );
};
