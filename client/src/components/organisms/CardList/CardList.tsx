import styled from "styled-components";
import { Card } from "components/molecules/Card/Card";
import clock from "assets/images/icons/clock.svg";
import money from "assets/images/icons/money.svg";
import security from "assets/images/icons/security.svg";

const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 60vh;
  gap: 2.5rem;
  @media (min-width: ${({ theme }) => theme.breakpoints.laptop}) {
    flex-direction: row;
  }
`;

export const CardList = () => {
  return (
    <CardWrapper>
      <Card
        icon={clock}
        heading="Szybko"
        text="Od razu po zrealizowaniu płatności zamówienie jest kompletowane, a następnie wysyłane do odbioru"
      />
      <Card
        active
        icon={money}
        heading="Tanio"
        text="Dzięki odpowiedniemu dobraniu restauracji jesteśmy w stanie zagwarantować Ci najtańsze jedzenie w okolicy"
      />
      <Card
        icon={security}
        heading="Bezpiecznie"
        text="Bezpieczne zamawianie jedzenia online, nie musisz czekać w kolejce. Zamawiasz, płacisz i odbierasza zamówienie"
      />
    </CardWrapper>
  );
};
