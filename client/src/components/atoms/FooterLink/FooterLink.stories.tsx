import React from "react";
import Link from "./FooterLink";

export default {
  title: "atoms/footer link",
  component: Link,
};

function Template(args: any) {
  return <Link href="/">Nasza firma</Link>;
}

export const Primary = Template.bind({});
