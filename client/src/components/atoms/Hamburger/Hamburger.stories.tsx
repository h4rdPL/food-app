import React from "react";
import Hamburger from "./Hamburger";
import hamburgerIcon from "assets/images/icons/hamburgerIcon.svg";

export default {
  title: "Atoms/Hamburger",
  component: Hamburger,
};

function Template(args: any) {
  return <Hamburger src={hamburgerIcon} {...args} />;
}

export const Icon = Template.bind({});
