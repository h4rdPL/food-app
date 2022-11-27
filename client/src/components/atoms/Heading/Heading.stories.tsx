import React from "react";
import Heading from "./Heading";
export default {
  title: "atoms/Header",
  component: Heading,
};

function Template(args: any) {
  return <Heading {...args}> Gdzie chcesz zamówić jedzenie?</Heading>;
}
function TemplateTitle(args: any) {
  return (
    <Heading title {...args}>
      Szybko
    </Heading>
  );
}

export const Primary = Template.bind({});
export const Secondary = TemplateTitle.bind({});
