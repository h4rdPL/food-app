import { User } from "./Users";

export default {
  title: "Organisms/Users",
  component: User,
};

const TemplateLoggedUser: React.FC = () => {
  return <User />;
};

export const Primary = TemplateLoggedUser.bind({});
