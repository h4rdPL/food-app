import styled, { css } from "styled-components";
import { baseStyle } from "helpers/styles/mixins";
// eslint-disable-next-line no-undef
const Button = styled.button`
  background-image: linear-gradient(
    to right,
    ${({ theme }) => theme.orangeGradient} -50%,
    ${({ theme }) => theme.yellowGradient} 220%
  );
  ${baseStyle}
  &::-webkit-file-upload-button {
    content: "Select some files";
    color: black;
    display: inline-block;
    background: -webkit-linear-gradient(top, #f9f9f9, #e3e3e3);
    border: 1px solid #999;
    border-radius: 3px;
    padding: 5px 8px;
    outline: none;
    white-space: nowrap;
    -webkit-user-select: none;
    cursor: pointer;
    text-shadow: 1px 1px #fff;
    font-weight: 700;
    font-size: 10pt;
  }
  ${({ secondary }) =>
    secondary &&
    css`
      background: ${({ theme }) => theme.background};
    `}
`;

export default Button;
