import Paragraph from "./Paragraph";

export default {
  title: "Atoms/Paragraph",
  component: Paragraph,
};

function Template(args: any) {
  return (
    <Paragraph {...args}>
      Lorem Ipsum is simply dummy text of the printing and typesetting industry.
      Lorem Ipsum has been the industry's standard dummy text ever.
    </Paragraph>
  );
}

export const Primary = Template.bind({});
