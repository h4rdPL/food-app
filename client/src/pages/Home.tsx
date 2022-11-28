import { MyNavigation } from "components/organisms/Navigation/Navigation";
import { Hero } from "components/organisms/Hero/Hero";
import { CardList } from "components/organisms/CardList/CardList";
import { Info } from "components/organisms/Info/Info";
import { Footer } from "components/organisms/Footer/Footer";
import { Faq } from "components/organisms/FAQ/Faq";

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
    )
}