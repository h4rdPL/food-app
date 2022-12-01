import styled from "styled-components";
import { Heading } from "components/atoms/Heading/Heading";
import { Label } from "components/atoms/Label/Label";
import Button from "components/atoms/Button/Button";
import Input from "components/atoms/Input/Input";
import { MyNavigation } from "components/organisms/Navigation/Navigation";
import { Footer } from "components/organisms/Footer/Footer";

const RegisterWrapper = styled.section`
  display: flex;
  gap: 1.2rem;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  min-height: 80vh;
  max-width: 600px;
  padding: 0 2rem;
  margin: 0 auto;
`;

const RegisterInner = styled.span`
  display: flex;
  gap: 1.2rem;
  flex-direction: column;
  align-items: flex-end;
  @media (min-width: ${({ theme }) => theme.breakpoints.laptop}) {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }
`;
const Testing = styled.div`
  display: flex;
  gap: 0.4rem;
  align-items: center;
`;
const StyledInput = styled(Input)`
  min-width: 10px;
`;

const StyledHeading = styled(Heading)`
  text-transform: uppercase;
`;

export const Register = () => {
  return (
    <>
      <MyNavigation />
      <RegisterWrapper>
        <StyledHeading title>Zarejestruj się</StyledHeading>
        <Input form placeholder="Email" />
        <Input form placeholder="Imię" />
        <Input form placeholder="Hasło" />
        <Input form placeholder="Powtórz hasło" />
        <RegisterInner>
          <Testing>
            <StyledInput
              type="checkbox"
              name="registerType"
              id="registerType"
            />
            <Label for="registerType">
              Zarejestruj się jako partner biznesowy
            </Label>
          </Testing>
          <Button>Zarejestruj się!</Button>
        </RegisterInner>
      </RegisterWrapper>
      <Footer />
    </>
  );
};
