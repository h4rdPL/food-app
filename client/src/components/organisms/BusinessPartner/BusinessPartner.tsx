import { useState, useContext } from "react";
import Button from "components/atoms/Button/Button";
import { Heading } from "components/atoms/Heading/Heading";
import Input from "components/atoms/Input/Input";
import Paragraph from "components/atoms/Paragraph/Paragraph";
import styled from "styled-components";
// import add from "assets/images/icons/add.svg";
import { AuthContext } from "context/authContext";
import { Restaurant } from "interfaces/Restaurants";
import { DishList } from "interfaces/DishList";
import Axios from "axios";
const BusinessPartnerWrapper = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 80vh;
  text-align: center;
  @media (min-width: ${({ theme }) => theme.breakpoints.laptop}) {
    padding: 0 20rem;
  }
`;

const BusinessPartnerInner = styled.div`
  margin-top: 3rem;
`;

const Form = styled.form`
  position: relative;
  display: flex;
  gap: 1rem;
  flex-direction: column;
`;

const StyledButton = styled(Button)`
  align-self: flex-end;
`;
const StyledHeading = styled(Heading)`
  text-align: left;
  @media (min-width: ${({ theme }) => theme.breakpoints.laptop}) {
    align-self: flex-start;
  }
`;

export const BusinessPartner = () => {
  const { currentUser } = useContext(AuthContext);
  const [restaurantData, setRestaurantData] = useState<Restaurant>({
    restaurantName: "",
    dishesType: "",
    restaurantPhoto: null,
    restaurantPlace: "",
    currentUser: currentUser,
  });

  const [dishData, setDishData] = useState<DishList>({
    dishName: "",
    dishPrice: null,
    dishPhoto: null,
    restaurantName: "",
  });

  const handleChangeDish = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setDishData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const addRestaurant = async (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    try {
      await Axios.post(
        "http://localhost:8800/api/restaurant/add",
        restaurantData
      ).catch((err) => console.log(err));
    } catch (err) {
      console.log(err);
    }
  };

  const handleChangeRestaurant = (e: React.ChangeEvent<HTMLInputElement>) => {
    setRestaurantData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
      restaurantPhoto: e.target.files,
    }));
  };

  const handleChangeFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    setRestaurantData((prev) => ({
      ...prev,
      restaurantPhoto: e.target.files,
    }));
  };

  const addDish = async (e: React.ChangeEvent<HTMLButtonElement>) => {
    e.preventDefault();
    try {
      await Axios.post(
        "http://localhost:8800/api/restaurant/addDishes",
        dishData
      ).catch((err) => console.log(err));
    } catch (err) {
      console.log(err);
    }
  };

  const handleChangeDishPhoto = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDishData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
      dishPhoto: e.target.files,
    }));
  };
  return (
    <BusinessPartnerWrapper>
      <StyledHeading title>
        Dzień dobry, <br />
        {currentUser ? currentUser.name : null}
      </StyledHeading>
      <BusinessPartnerInner>
        <Form>
          <Paragraph>Dodaj restaurację</Paragraph>
          <Input
            form
            onChange={handleChangeRestaurant}
            name="restaurantName"
            placeholder="Nazwa restauracji"
          />
          <Input
            form
            onChange={handleChangeRestaurant}
            name="dishesType"
            placeholder="Rodzaj dań"
          />
          <Input
            form
            onChange={handleChangeRestaurant}
            name="restaurantPlace"
            placeholder="Gdzie znajduje się lokal?"
          />
          <Input
            file
            name="restaurantPhoto"
            type="file"
            onChange={handleChangeFile}
          />
          <StyledButton onClick={addRestaurant}>Dodaj</StyledButton>
        </Form>
        <Form>
          <Paragraph>Dodaj danie</Paragraph>
          <Input
            form
            onChange={handleChangeDish}
            name="dishName"
            placeholder="Nazwa dania"
          />
          <Input
            form
            onChange={handleChangeDish}
            name="dishPrice"
            type="number"
            placeholder="koszt dania"
          />
          <Input
            form
            name="restaurantName"
            onChange={handleChangeDish}
            placeholder="Nazwa restauracji"
          />
          <Input
            file
            name="dishPhoto"
            type="file"
            onClick={handleChangeDishPhoto}
          />
          <StyledButton onClick={addDish}>Dodaj</StyledButton>
        </Form>
      </BusinessPartnerInner>
    </BusinessPartnerWrapper>
  );
};
