import styled, { css } from "styled-components";
import { useState } from "react";
import { faqQuestions } from "assets/data/faq";
import { Heading, SubHeading } from "components/atoms/Heading/Heading";
import Paragraph from "components/atoms/Paragraph/Paragraph";
import add from "assets/images/icons/add.svg";
import hide from "assets/images/icons/hide.svg";
const FaqWrapper = styled.div`
  text-align: center;
  min-height: 50vh;
  margin: 0 auto;
  padding: 2rem;
  @media (min-width: ${({ theme }) => theme.breakpoints.laptop}) {
    width: 50%;
  }
`;
const FaqInner = styled.div``;

const FaqQuestionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  padding: 0.7rem;
  border-bottom: 1px solid ${({ theme }) => theme.orangeGradient};
`;
const QuestionSpan = styled.span`
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
`;
const Image = styled.img`
  width: 32px;
  cursor: pointer;
`;
const StyledHeading = styled(Heading)`
  margin-bottom: 5rem;
`;
const StyledParagraph = styled(Paragraph)`
  overflow: hidden;
  max-height: 0px;
  font-size: 1rem;
  width: 75%;
  transition: all 0.5s ease-in-out;
  ${({ isOpen }) =>
    isOpen &&
    css`
      max-height: 300px;
    `}

  @media (min-width: ${({ theme }) => theme.breakpoints.laptop}) {
    width: 50%;
  }
`;

export const Faq: React.FC = () => {
  const [faq, setFaq] = useState(faqQuestions);

  const handleClick = (id) => {
    setFaq((myFaq) =>
      myFaq.map((question) => ({
        ...question,
        isOpen: question.id === id ? !question.isOpen : question.isOpen,
      }))
    );
  };
  return (
    <FaqWrapper>
      <StyledHeading title>FAQ</StyledHeading>
      {faq.map(({ id, question, answer, isOpen }) => {
        return (
          <FaqInner key={id}>
            <FaqQuestionWrapper>
              <QuestionSpan onClick={() => handleClick(id)}>
                <SubHeading>{question}</SubHeading>
                <Image src={isOpen ? hide : add} />
              </QuestionSpan>
              <StyledParagraph isOpen={isOpen}>{answer}</StyledParagraph>
            </FaqQuestionWrapper>
          </FaqInner>
        );
      })}
    </FaqWrapper>
  );
};
