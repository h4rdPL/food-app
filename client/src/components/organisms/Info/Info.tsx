import Heading from "components/atoms/Heading/Heading";
import Paragraph from "components/atoms/Paragraph/Paragraph";
import styled from "styled-components";
import order from "assets/images/online-shop.svg";
import car from "assets/images/car.svg";
import eat from "assets/images/eat.svg";
import { MyNavigation } from "../Navigation/Navigation";
const InfoWrapper = styled.div`
    text-align: center;
`;

const InfoInnerWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 2rem;
    padding: 3rem 0;
    min-width: 100%;
    text-align: center;
`;

const Order = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    min-width: 100%;
    @media (min-width: ${({ theme }) => theme.breakpoints.laptop}) {
        flex-direction: row;
    }

`;

const Recive = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    min-width: 100%;
    @media (min-width: ${({ theme }) => theme.breakpoints.laptop}) {
        flex-direction: row-reverse;
    }
`;
const Image = styled.img`
    max-height: 300px;
    max-width: 400px;
    margin: 1.5rem auto;
    @media (min-width: ${({ theme }) => theme.breakpoints.laptop}) {
        margin:0;
    }
`;
export const Info: React.FC = () => {
    return (
        <>
            <InfoWrapper>
                <Heading title>
                    Jak działamy?
                </Heading>
                <InfoInnerWrapper>
                    <Order>
                        <Paragraph>
                            1. Zamawiasz
                        </Paragraph>
                        <Image src={order} />
                    </Order>
                    <Recive>
                        <Paragraph>
                            2. Odbierasz
                        </Paragraph>
                        <Image src={car} />
                    </Recive>
                    <Order>
                        <Paragraph>
                            3. Jesz
                        </Paragraph>
                        <Image src={eat} />
                    </Order>
                </InfoInnerWrapper>
            </InfoWrapper>
        </>
    )
}