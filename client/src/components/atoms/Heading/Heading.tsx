import styled, { css } from "styled-components";

const Heading = styled.h1`
  font-size: 1.7rem;
  font-weight: bold;
  ${({ title }) =>
    title &&
    css`
      font-weight: bold;
      @media (min-width: ${({ theme }) => theme.breakpoints.laptop}) {
        font-size: 2.3rem;
      }
    `}
  @media (min-width: ${({ theme }) => theme.breakpoints.laptop}) {
    /* font-size: 3.125rem; */
  }
`;

export default Heading;
