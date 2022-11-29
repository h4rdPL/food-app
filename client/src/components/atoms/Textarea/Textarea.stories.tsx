import { TextareaWrapper } from "components/atoms/Textarea/Textarea";

export default {
  title: "Atoms/Textarea",
  component: TextareaWrapper,
};

const Template = () => {
  return <TextareaWrapper placeholder="Treść wiadomości" />;
};

export const Primary = Template.bind({});
