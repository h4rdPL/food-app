import Button from "components/atoms/Button/Button";
import { Heading } from "components/atoms/Heading/Heading";
import Input from "components/atoms/Input/Input";
import { Footer } from "components/organisms/Footer/Footer";
import { MyNavigation } from "components/organisms/Navigation/Navigation";
import styled from "styled-components";

const LoginWrapper = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 80vh;
  text-align: center;
`;
const LoginInner = styled.form`
  display: flex;
  gap: 1.2rem;
  flex-direction: column;
`;

const StyledHeading = styled(Heading)`
  text-transform: uppercase;
  margin-bottom: 2rem;
`;

const StyledButton = styled(Button)`
  align-self: flex-end;
`;

export const Login = () => {
  return (
    <>
      <MyNavigation />
      <LoginWrapper>
        <LoginInner>
          <StyledHeading title>Zaloguj się</StyledHeading>
          <Input form placeholder="Email" />
          <Input form placeholder="Hasło" />
          <StyledButton>Zaloguj się</StyledButton>
        </LoginInner>
      </LoginWrapper>
      <Footer />
    </>
  );
};
