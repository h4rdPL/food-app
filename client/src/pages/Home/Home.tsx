import { Hero } from "components/organisms/Hero/Hero";
import { CardList } from "components/organisms/CardList/CardList";
import { Info } from "components/organisms/Info/Info";
import { Faq } from "components/organisms/FAQ/Faq";

export const Home = () => {
  return (
    <>
      <Hero />
      <CardList />
      <Info />
      <Faq />
    </>
  );
};
