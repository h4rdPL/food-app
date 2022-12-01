import styled, { css } from "styled-components";
import logo from "assets/images/logo.svg";
import facebook from "assets/images/icons/facebook.svg";
import twitter from "assets/images/icons/twitter.svg";
import instagram from "assets/images/icons/instagram.svg";
import ButtonIcon from "components/atoms/ButtonIcon/ButtonIcon";
import { Link } from "react-router-dom";
const FooterWrapper = styled.footer`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  justify-items: center;
  align-items: center;
  width: 100%;
  min-height: 30vh;
  padding: 2rem 0;
  background-color: ${({ theme }) => theme.background};
  @media (min-width: ${({ theme }) => theme.breakpoints.laptop}) {
    grid-template-columns: repeat(5, 1fr);
    padding: 4rem 0;
  }
`;

const Logo = styled.img`
  width: auto;
  align-self: flex-start;
`;
const List = styled.ul`
  display: flex;
  align-self: flex-start;
  gap: 0.2rem;
  flex-direction: column;
  width: auto;
  margin: 2rem 0;
  ${({ socialIconsList }) =>
    socialIconsList &&
    css`
      gap: 0.8rem;
      @media (min-width: ${({ theme }) => theme.breakpoints.laptop}) {
        flex-direction: row;
      }
    `}
  @media (min-width: ${({ theme }) => theme.breakpoints.laptop}) {
    align-self: flex-start;
    margin: 0;
  }
`;

const Item = styled.li`
  text-align: center;
  &:first-child {
    margin-bottom: 0.5rem;
    font-weight: bold;
  }
  &:not(:first-child) {
    &:hover {
      color: ${({ theme }) => theme.orangeGradient};
    }
  }
  @media (min-width: ${({ theme }) => theme.breakpoints.laptop}) {
    text-align: left;
  }
`;

const ItemLink = styled.a`
  transition: color 0.3s ease-in-out;
`;

export const Footer: React.FC = () => {
  return (
    <FooterWrapper>
      <Logo src={logo} alt="logo" />
      <List>
        <Item>
          <ItemLink>Firma</ItemLink>
        </Item>
        <Item>
          <Link to="/">
            <ItemLink>Strona główna</ItemLink>
          </Link>
        </Item>
        <Item>
          <ItemLink>O nas</ItemLink>
        </Item>
        <Item>
          <Link to="/contact">
            <ItemLink>Kontakt</ItemLink>
          </Link>
        </Item>
      </List>
      <List>
        <Item>
          <ItemLink>Produkty</ItemLink>
        </Item>
        <Item>
          <ItemLink>Lokale</ItemLink>
        </Item>
      </List>
      <List>
        <Item>
          <ItemLink>Dołącz do nas!</ItemLink>
        </Item>
        <Item>
          <Link to="/login">
            <ItemLink>Zaloguj się</ItemLink>
          </Link>
        </Item>
        <Item>
          <Link to="/register">
            <ItemLink>Zarejestruj się</ItemLink>
          </Link>
        </Item>
      </List>
      <List socialIconsList>
        <ButtonIcon icon={facebook} />
        <ButtonIcon icon={twitter} />
        <ButtonIcon icon={instagram} />
      </List>
    </FooterWrapper>
  );
};
