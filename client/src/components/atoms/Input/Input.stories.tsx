import React from "react";
import Input from "./Input";

export default {
  title: "Atoms/Input",
  component: Input,
};

function PrimaryTemplate(args: any) {
  return <Input placeholder="Np. Nowy Targ słoneczna 22" {...args} />;
}
function SecondaryTemplate(args: any) {
  return <Input form placeholder="Email" {...args} />;
}

export const Search = PrimaryTemplate.bind({});
export const Forms = SecondaryTemplate.bind({});
