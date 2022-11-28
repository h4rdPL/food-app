import styled, { css } from "styled-components";
import { useState } from "react";
import { FaqSection } from "interfaces/Faq";
import Heading from "components/atoms/Heading/Heading";
import Paragraph from "components/atoms/Paragraph/Paragraph";
import add from "assets/images/icons/add.svg";
import hide from "assets/images/icons/hide.svg";
const FaqWrapper = styled.div`
    text-align: center;
    min-height: 30vh;
`;
const FaqInner = styled.div`
`;

const FaqQuestionWrapper = styled.div`
    display: flex;
    flex-direction: column;
    text-align: left;
    padding: .7rem;
    border-bottom: 1px solid ${({ theme }) => theme.orangeGradient};

`;
const QuestionSpan = styled.span`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;
const Image = styled.img`
    width: 32px;
    cursor: pointer;
`;

const StyledParagraph = styled(Paragraph)`
    overflow: hidden;
    max-height: 0px;
    transition: all .9s ease-in-out;
    ${({ isActive }) => isActive && css`
        max-height: 300px;
    `}
`;

export const Faq: React.FC = () => {
    const [isActive, setIsActive] = useState<FaqSection>(false);

    const handleClick = () => {
        setIsActive(!isActive);
    }
    return (
        <FaqWrapper>
            <Heading title>
                FAQ
            </Heading>
            <FaqInner>
                <FaqQuestionWrapper>
                    <QuestionSpan>
                        <Heading>
                            Jaki jest średni czas oczekiwania na zamówienie?
                        </Heading>
                        <Image src={isActive ? hide : add} onClick={handleClick} />
                    </QuestionSpan>
                    <StyledParagraph isActive={isActive}>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    </StyledParagraph>
                </FaqQuestionWrapper>
            </FaqInner>
        </FaqWrapper>
    )
}