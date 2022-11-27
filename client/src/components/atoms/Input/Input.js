import styled, { css } from "styled-components";
// import img from "assets/images/icons/search.svg";
import img from "assets/images/icons/search.svg";
const Input = styled.input`
  padding: 0.8rem 1.2rem;
  font-size: 1rem;
  border-radius: 25px;
  border: none;
  background-image: url(${img});
  background-position: 90%;
  background-size: 15px;
  min-width: 300px;
  background-repeat: no-repeat;
  color: ${(theme) => theme.black};
  ${({ form }) =>
    form &&
    css`
      border: 0.5px solid ${({ theme }) => theme.black};
      background-image: none;
    `}
`;

export default Input;
