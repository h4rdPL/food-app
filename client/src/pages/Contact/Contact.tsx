import Button from "components/atoms/Button/Button";
import { Heading } from "components/atoms/Heading/Heading";
import Input from "components/atoms/Input/Input";
import { TextareaWrapper } from "components/atoms/Textarea/Textarea";
import styled from "styled-components";
const ContactWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;
const StyledHeader = styled(Heading)`
  text-transform: uppercase;
  margin-bottom: 2rem;
`;

const ContactInner = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;
const StyledButton = styled(Button)`
  align-self: flex-end;
`;
export const Contact: React.FC = () => {
  return (
    <ContactWrapper>
      <StyledHeader title>Kontakt</StyledHeader>
      <ContactInner>
        <Input form placeholder="Email" />
        <Input form placeholder="Tytuł wiadomości" />
        <TextareaWrapper placeholder="Treść wiadomości" />
        <StyledButton>Wyślij!</StyledButton>
      </ContactInner>
    </ContactWrapper>
  );
};
