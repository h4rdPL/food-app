import { Footer } from "components/organisms/Footer/Footer";
import { MyNavigation } from "components/organisms/Navigation/Navigation";

export const Layout: React.FC = ({ children }: any) => (
  <>
    <MyNavigation />
    {children}
    <Footer />
  </>
);
