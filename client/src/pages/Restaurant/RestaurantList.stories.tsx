import { CardList, RestaurantList } from "./RestaurantList";

export default {
  title: "Pages/Restaurant",
  component: RestaurantList,
};

const Template = () => {
  // return <RestaurantList />;
};

const SecondaryTemplate = () => {
  return <CardList />;
};

export const Primary = Template.bind({});
export const Secondary = SecondaryTemplate.bind({});
