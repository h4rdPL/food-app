import { Footer } from "components/organisms/Footer/Footer";
import { MyNavigation } from "components/organisms/Navigation/Navigation";
import { User } from "components/organisms/Users/Users";
import { useContext } from "react";
import { AuthContext } from "context/authContext";
import { BusinessPartner } from "components/organisms/BusinessPartner/BusinessPartner";
export const UserPage: React.FC = () => {
  const { currentUser } = useContext(AuthContext);
  return (
    <>
      <MyNavigation />
      {currentUser.isBusinessPartner ? <BusinessPartner /> : <User />}
      <Footer />
    </>
  );
};
