import styled, { css } from "styled-components";
// eslint-disable-next-line no-undef
const Button = styled.button`
  background-image: linear-gradient(
    to right,
    ${({ theme }) => theme.orangeGradient} -50%,
    ${({ theme }) => theme.yellowGradient} 220%
  );
  border: none;
  border-radius: 60px;
  padding: 0.75rem 1.3rem;
  font-size: 1rem;
  cursor: pointer;
  transition: box-shadow 0.3s ease-in-out;
  &:hover {
    -webkit-box-shadow: 1px 10px 26px -10px rgba(66, 68, 90, 1);
    -moz-box-shadow: 1px 10px 26px -10px rgba(66, 68, 90, 1);
    box-shadow: 1px 10px 26px -10px rgba(66, 68, 90, 1);
  }
  ${({ secondary }) =>
    secondary &&
    css`
      background: ${({ theme }) => theme.background};
    `}
`;

export default Button;
