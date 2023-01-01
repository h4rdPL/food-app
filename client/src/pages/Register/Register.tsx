import styled from "styled-components";
import Button from "components/atoms/Button/Button";
import Input from "components/atoms/Input/Input";
import { Heading } from "components/atoms/Heading/Heading";
import { Label } from "components/atoms/Label/Label";
import { MyNavigation } from "components/organisms/Navigation/Navigation";
import { Footer } from "components/organisms/Footer/Footer";
import { useState } from "react";
import emailRegex from "email-regex";
import Axios from "axios";
import { UserRegister } from "interfaces/Register";
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

export const Register: React.FC = () => {
  const [error, setError] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>("");
  const [inputs, setInputs] = useState<UserRegister>({
    name: "",
    email: "",
    password: "",
    repeatedPassword: "",
    address: "",
    isBusinessPartner: false,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setInputs((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };
  const handleBoolean = (): void => {
    setInputs((prev) => ({
      ...prev,
      isBusinessPartner: !inputs.isBusinessPartner,
    }));
  };

  const checkEmail = (): void => {
    const check = emailRegex({ exact: true }).test(inputs.email);
    if (!check) {
      setError(true);
      setErrorMessage("Adres email nie jest poprawny!");
    }
  };
  const handleSubmit = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    checkEmail();
    if (inputs.password !== inputs.repeatedPassword) {
      setError(true);
      setErrorMessage("Hasła nie są poprawne");
    } else if (error === true) {
      console.log("Bad news :/");
    } else if (error === false) {
      try {
        setError(false);
        let result = await Axios.post(
          "http://localhost:8800/api/users/register",
          inputs
        ).catch((err) => {
          if (err.response) {
            console.log(err.response.data);
            setError(true);
            setErrorMessage(err.response.data);
          }
        });
        console.log(result);
      } catch (error: any | undefined) {
        console.error(error.response.data);
      }
    }
  };
  return (
    <>
      <MyNavigation />
      <RegisterWrapper>
        <StyledHeading title>Zarejestruj się</StyledHeading>
        <Input form name="name" placeholder="Imię" onChange={handleChange} />
        <Input form placeholder="Email" name="email" onChange={handleChange} />
        <Input
          form
          type="password"
          name="password"
          placeholder="Hasło"
          onChange={handleChange}
        />
        <Input
          form
          type="password"
          name="repeatedPassword"
          placeholder="Powtórz hasło"
          onChange={handleChange}
        />
        <Input
          form
          name="address"
          placeholder="Twój adres Np. Gdańsk"
          onChange={handleChange}
        />
        {error && <span>{errorMessage}</span>}
        <RegisterInner>
          <Testing>
            <StyledInput
              type="checkbox"
              name="isBusinessPartner"
              id="registerType"
              onChange={handleBoolean}
            />
            <Label data-testid="custom-element" for="registerType">
              Zarejestruj się jako partner biznesowy
            </Label>
          </Testing>
          <Button onClick={handleSubmit}>Zarejestruj się!</Button>
        </RegisterInner>
      </RegisterWrapper>
      <Footer />
    </>
  );
};
