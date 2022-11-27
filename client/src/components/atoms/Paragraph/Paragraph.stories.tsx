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
function ErrorTemplate(args: any) {
  return (
    <Paragraph error {...args}>
      Wygląda na to, że nie jesteś zalogowany. Zaloguj się, aby skorzystać z
      aplikacji.
    </Paragraph>
  );
}
export const Primary = Template.bind({});
export const Secondary = ErrorTemplate.bind({});
