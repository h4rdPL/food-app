import { Heading } from "components/atoms/Heading/Heading";
import Paragraph from "components/atoms/Paragraph/Paragraph";
import styled from "styled-components";

const FleetWrapper = styled.div`
    text-align: center;
`;

export const Fleet = () => {
    return (
        <>
            <FleetWrapper>
                <Heading>
                    Nasza flota
                </Heading>
                <FleetInner>
                    <Item>
                        <Paragraph>
                            Szybkie samochody
                        </Paragraph>
                        <Image />
                    </Item>
                </FleetInner>
            </FleetWrapper>
        </>
    )
}