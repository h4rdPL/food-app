import { Hero } from "components/organisms/Hero/Hero";
import { CardList } from "components/organisms/CardList/CardList";
import { Info } from "components/organisms/Info/Info";
import { Faq } from "components/organisms/FAQ/Faq";
import { MyNavigation } from "components/organisms/Navigation/Navigation";
import { Footer } from "components/organisms/Footer/Footer";

export const Home = () => {
  return (
    <>
      <MyNavigation />
      <Hero />
      <CardList />
      <Info />
      <Faq />
      <Footer />
    </>
  );
};
