import { Footer } from "components/organisms/Footer/Footer";
import { MyNavigation } from "components/organisms/Navigation/Navigation";
import { Home } from "pages/Home/Home";

export const Layout: React.FC = ({ children }: any) => (
  <>
    <MyNavigation />
    {children}
    <Footer />
  </>
);
