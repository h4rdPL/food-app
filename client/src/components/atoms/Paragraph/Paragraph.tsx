import styled, { css } from "styled-components";

const Paragraph = styled.p`
  font-size: 1.3rem;
  ${({ error }) =>
    error &&
    css`
      color: red;
      font-weight: bold;
    `}
  ${({ small }) =>
    small &&
    css`
      font-size: 0.85rem;
      @media (min-width: ${({ theme }) => theme.breakpoints.laptop}) {
        font-size: 0.875rem;
      }
    `}

  @media (min-width: ${({ theme }) => theme.breakpoints.laptop}) {
    font-size: 1.6rem;
  }
`;

export default Paragraph;
