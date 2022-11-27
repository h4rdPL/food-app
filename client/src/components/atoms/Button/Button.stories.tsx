import React from "react";
import Button from "./Button";

export default {
  title: "Atoms/Button",
  component: Button,
};

function Template(args: any) {
  return <Button {...args}>Zarejestruj się</Button>;
}
function TemplateSecondary(args: any) {
  return (
    <Button {...args} secondary>
      Zarejestruj się
    </Button>
  );
}

export const Primary = Template.bind({});
export const Secondary = TemplateSecondary.bind({});
