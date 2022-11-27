import styled from "styled-components";

const ButtonIcon = styled.a`
  display: block;
  width: 32px;
  height: 32px;
  padding: 1.5rem;
  background-image: url(${({ icon }) => icon});
  background-position: 50% 50%;
  background-repeat: no-repeat;
  border: 1px solid ${({ theme }) => theme.black};
  border-radius: 50%;
`;

export default ButtonIcon;
