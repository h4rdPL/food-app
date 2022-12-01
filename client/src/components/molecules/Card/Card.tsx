import styled, { css } from "styled-components";
import { Heading } from "components/atoms/Heading/Heading";
import Paragraph from "components/atoms/Paragraph/Paragraph";
import { CardProps } from "interfaces/Cards";
const CardWrapper = styled.div`
  position: relative;
  display: flex;
  gap: 1rem;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 300px;
  padding: 0 3.5rem;
  text-align: center;
  max-width: 341px;
  transition: transform 0.3s ease-in-out;
  &::before {
    content: "";
    position: absolute;
    inset: 0;
    border-radius: 50px;
    padding: 2px;
    background: linear-gradient(
      45deg,
      ${({ theme }) => theme.orangeGradient} -50%,
      ${({ theme }) => theme.yellowGradient} 220%
    );
    -webkit-mask: linear-gradient(#fff 0 0) content-box,
      linear-gradient(#fff 0 0);
    -webkit-mask-composite: xor;
    mask-composite: exclude;
    cursor: pointer;
  }

  ${({ active }) =>
    active &&
    css`
      background-image: linear-gradient(
        to right,
        ${({ theme }) => theme.orangeGradient} -50%,
        ${({ theme }) => theme.yellowGradient} 220%
      );
      border-radius: 50px;
      color: ${({ theme }) => theme.white};
      &::before {
        background: transparent;
      }
    `}
  &:hover {
    transform: scale(1.02);
  }
`;

const StyledParagraph = styled(Paragraph)`
  font-size: 1rem;
`;

const Icon = styled.span`
  width: 32px;
  height: 32px;
  background-image: url(${({ icon }) => icon});
  background-repeat: no-repeat;
`;

export const Card: React.FC<CardProps> = ({ icon, text, heading, active }) => {
  return (
    <>
      <CardWrapper active={active}>
        <Icon icon={icon} />
        <Heading>{heading}</Heading>
        <StyledParagraph>{text}</StyledParagraph>
      </CardWrapper>
    </>
  );
};
