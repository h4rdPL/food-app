import Button from "components/atoms/Button/Button";
import { Heading } from "components/atoms/Heading/Heading";
import Input from "components/atoms/Input/Input";
import { Footer } from "components/organisms/Footer/Footer";
import { MyNavigation } from "components/organisms/Navigation/Navigation";
import styled from "styled-components";
import Axios from "axios";
import { useState } from "react";
import { UserLogin } from "interfaces/Login";
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
  const [inputs, setInputs] = useState<UserLogin>({
    email: "",
    password: "",
  });
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setInputs((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };
  const handleLogin = (e: any) => {
    e.preventDefault();
    fetch("http://localhost:8800/api/users/login", {
      method: "POST",
      credentials: "include",
      body: JSON.stringify(inputs),
    });
    // try {
    //   let result = await Axios.post(
    //     "http://localhost:8800/api/users/login",
    //     inputs
    //   ).catch((err) => {
    //     if (err.response) {
    //       console.log(err.response.data);
    //     }
    //     console.log(result);
    //   });
    // } catch (error: any | undefined) {
    //   console.error(error.response.data);
    // }
  };

  return (
    <>
      <MyNavigation />
      <LoginWrapper>
        <LoginInner>
          <StyledHeading title>Zaloguj się</StyledHeading>
          <Input
            form
            placeholder="Email"
            name="email"
            onChange={handleChange}
          />
          <Input
            form
            placeholder="Hasło"
            name="password"
            onChange={handleChange}
          />
          <StyledButton onClick={handleLogin}>Zaloguj się</StyledButton>
        </LoginInner>
      </LoginWrapper>
      <Footer />
    </>
  );
};
