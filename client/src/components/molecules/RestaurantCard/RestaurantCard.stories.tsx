import { RestaurantCardList } from "./RestaurantCard";
import { DishesCardList } from "./RestaurantCard";
export default {
  title: "Molecules/RestaurantCard",
  component: RestaurantCardList,
};

const Template = () => {
  return <RestaurantCardList />;
};

const SecondTemplate = () => {
  return <DishesCardList isDishes={true} />;
};

export const Primary = Template.bind({});
export const Secondary = SecondTemplate.bind({});
