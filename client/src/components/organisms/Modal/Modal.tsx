import { Heading } from "components/atoms/Heading/Heading";
import Input from "components/atoms/Input/Input";
import styled from "styled-components";

const ModalWrapper = styled.div`
  display: flex;
  gap: 3.2rem;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 60vh;
  width: 90%;
  border-radius: 15px;
  margin: 20px auto;
  text-align: center;
  background-color: ${({ theme }) => theme.background};
`;

export const Modal: React.FC = () => {
  return (
    <ModalWrapper>
      <Heading>Gdzie chcesz zamówić jedzenie?</Heading>
      <Input placeholder="Np. Nowy Targ" />
    </ModalWrapper>
  );
};
