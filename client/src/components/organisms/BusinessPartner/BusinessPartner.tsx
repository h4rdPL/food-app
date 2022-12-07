import Button from "components/atoms/Button/Button";
import { Heading } from "components/atoms/Heading/Heading";
import Input from "components/atoms/Input/Input";
import Paragraph from "components/atoms/Paragraph/Paragraph";
import styled from "styled-components";
import add from "assets/images/icons/add.svg";
const BusinessPartnerWrapper = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 80vh;
  text-align: center;
`;

const BusinessPartnerInner = styled.div`
  margin-top: 3rem;
`;

const Form = styled.form`
  position: relative;
  display: flex;
  gap: 1rem;
  flex-direction: column;
`;

const StyledButton = styled(Button)`
  align-self: flex-end;
`;

export const BusinessPartner = () => {
  return (
    <BusinessPartnerWrapper>
      <Heading title>
        Dzień dobry, <br />
        użytkownik
      </Heading>
      <BusinessPartnerInner>
        <Form>
          <Paragraph>Dodaj restaurację</Paragraph>
          <Input form placeholder="Nazwa restauracji" />
          <Input form placeholder="Rodzaj dań" />
          <Input file type="file" />
          <StyledButton>Dodaj</StyledButton>
        </Form>
        <Form>
          <Paragraph>Dodaj danie</Paragraph>
          <Input form placeholder="Nazwa restauracji (taka jak dodano)" />
          <Input form placeholder="Nazwa dania" />
          <Input form placeholder="koszt dania" />
          <Input file type="file" />
          <StyledButton>Dodaj</StyledButton>
        </Form>
      </BusinessPartnerInner>
    </BusinessPartnerWrapper>
  );
};
