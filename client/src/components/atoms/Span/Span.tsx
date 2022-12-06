import styled, { css } from "styled-components";

export const Span = styled.span`
  font-size: 0.8rem;
  font-weight: bold;
  color: red;
  ${({ restaurant }) =>
    restaurant &&
    css`
      color: ${({ theme }) => theme.black};
      font-size: 1rem;
      font-weight: 500;
    `}
`;
