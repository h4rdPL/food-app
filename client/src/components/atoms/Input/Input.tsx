import styled, { css } from "styled-components";
// import img from "assets/images/icons/search.svg";
import img from "assets/images/icons/search.svg";
import { baseStyle } from "helpers/styles/mixins";
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
  color: ${({ theme }) => theme.black};
  ${({ file }) =>
    file &&
    css`
      background-image: none;
      color: transparent;
      &::-webkit-file-upload-button {
        visibility: hidden;
      }
      &:active {
        outline: 0;
      }
      &::before {
        content: "Dodaj zdjęcie";
        position: absolute;
        right: 0;
        ${baseStyle}
        background-color: ${({ theme }) => theme.background};
        color: ${({ theme }) => theme.black};
        display: inline-block;
        white-space: nowrap;
        -webkit-user-select: none;
        cursor: pointer;
        font-size: 10pt;
        font-family: "Montserrat";
      }
    `}
  ${({ form }) =>
    form &&
    css`
      border: 0.5px solid ${({ theme }) => theme.black};
      background-image: none;
    `}
`;

export default Input;
