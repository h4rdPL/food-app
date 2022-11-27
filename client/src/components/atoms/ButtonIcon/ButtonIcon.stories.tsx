import ButtonIcon from "./ButtonIcon";
import fbIcon from "assets/images/icons/facebook.svg";
import ttIcon from "assets/images/icons/twitter.svg";
import igIcon from "assets/images/icons/instagram.svg";
import { ButtonIconProps } from "interfaces/ButtonIcon";
export default {
  title: "Atoms/Button Icon",
  component: ButtonIcon,
};

const TemplateFacebook: React.FC<ButtonIconProps> = () => {
  return <ButtonIcon icon={fbIcon} />;
};

const TemplateTwitter: React.FC<ButtonIconProps> = () => {
  return <ButtonIcon icon={ttIcon} />;
};
const TemplateInstagram: React.FC<ButtonIconProps> = () => {
  return <ButtonIcon icon={igIcon} />;
};

export const Facebook = TemplateFacebook.bind({});
export const Twitter = TemplateTwitter.bind({});
export const Instagram = TemplateInstagram.bind({});
