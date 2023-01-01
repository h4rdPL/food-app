import { RestaurantCardList } from "./RestaurantCard";
import { DishesCardList } from "./RestaurantCard";
export default {
  title: "Molecules/RestaurantCard",
  component: RestaurantCardList,
};

const Template = () => {
  return (
    <RestaurantCardList name="sda" type="pizza" city="asd" restaurantId={`2`} />
  );
};

const SecondTemplate = () => {
  return (
    <DishesCardList isDishes={true} id={1} dishName="sushi" dishPrice={25} />
  );
};

export const Primary = Template.bind({});
export const Secondary = SecondTemplate.bind({});
