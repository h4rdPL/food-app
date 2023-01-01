import Button from "components/atoms/Button/Button";
import { Heading } from "components/atoms/Heading/Heading";
import Input from "components/atoms/Input/Input";
import { Footer } from "components/organisms/Footer/Footer";
import { MyNavigation } from "components/organisms/Navigation/Navigation";
import styled from "styled-components";
import { useContext, useState } from "react";
import { UserLogin } from "interfaces/Login";
import { AuthContext } from "context/authContext";
import { useNavigate } from "react-router";

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
  const { login } = useContext(AuthContext);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setInputs((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const navigate = useNavigate();
  const handleLogin = async (e: any) => {
    e.preventDefault();
    try {
      await login(inputs);
      navigate("/");
    } catch (error: any | undefined) {
      console.error(error.response.data);
    }
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
            type="password"
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
