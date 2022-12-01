import { NotFound } from "./404";

export default {
  title: "Pages/Not found",
  component: NotFound,
};

const Template: React.FC = () => {
  return <NotFound />;
};

export const Primary = Template.bind({});
