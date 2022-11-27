import { Card } from "./Card";
import clock from "assets/images/icons/clock.svg";
import money from "assets/images/icons/money.svg";
import security from "assets/images/icons/security.svg";
export default {
  title: "Molecules/Card",
  component: Card,
};

const FirstCard = () => {
  return (
    <Card
      icon={clock}
      heading="Szybko"
      text="Od razu po zrealizowaniu płatności zamówienie jest kompletowane, a następnie wysyłane do odbioru"
    />
  );
};
// active card
const SecondCard = () => {
  return (
    <Card
      active
      icon={money}
      heading="Tanio"
      text="Dzięki odpowiedniemu dobraniu restauracji jesteśmy w stanie zagwarantować Ci najtańsze jedzenie w okolicy."
    />
  );
};
const ThirdCard = () => {
  return (
    <Card
      icon={security}
      heading="Bezpiecznie"
      text="Bezpieczne zamawianie jedzenia online, nie musisz czekać w kolejce. Zamawiasz, płacisz i odbierasza zamówienie"
    />
  );
};
export const Primary = FirstCard.bind({});
export const Secondary = SecondCard.bind({});
export const Triatary = ThirdCard.bind({});
