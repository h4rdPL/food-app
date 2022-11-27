import React, { useState } from "react";
import styled, { css } from "styled-components";
import Button from "components/atoms/Button/Button";
import logo from "assets/images/logo-color.svg";
const Navigation = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  padding: 2rem;
  width: 100%;
  @media (min-width: ${({ theme }) => theme.breakpoints.laptop}) {
    justify-content: space-around;
    padding: 0;
  }
`;

const Hamburger = styled.div`
  position: relative;
  width: 35px;
  height: 30px;
  cursor: pointer;
  @media (min-width: ${({ theme }) => theme.breakpoints.laptop}) {
    display: none;
  }

  &::before {
    content: "";
    position: absolute;
    top: 10%;
    width: 100%;
    height: 1px;
    background-color: ${({ theme }) => theme.black};
    transition: all 0.3s ease-in-out;
    ${({ isActive }) =>
      isActive &&
      css`
        transform: rotate(45deg) translateY(25px);
        transform-origin: top right;
      `};
  }
  &::after {
    content: "";
    width: 100%;
    height: 1px;
    position: absolute;
    bottom: 10%;
    background-color: ${({ theme }) => theme.black};
    transition: all 0.3s ease-in-out;
    ${({ isActive }) =>
      isActive &&
      css`
        transform: rotate(45deg) translateX(-50%);
        transform-origin: right;
      `};
  }
`;

const Logo = styled.img`
  width: auto;
  cursor: pointer;
`;

const NavWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: stretch;
  width: 100%;
  position: absolute;
  top: 110%;
  left: 0;
  background-color: ${({ theme }) => theme.white};
  color: ${({ theme }) => theme.black};
  padding: 1.5rem 2rem;
  border-radius: 5px;
  transform: translateY(-150%);
  transition: transform 0.39s ease-in-out;
  @media (min-width: ${({ theme }) => theme.breakpoints.laptop}) {
    position: relative;
    flex-direction: row;
    transform: translateY(0);
    align-items: center;
    width: fit-content;
  }
  ${({ isActive }) =>
    isActive &&
    css`
      transform: translateY(0);
    `}
`;
const NavList = styled.ul`
  text-align: center;
  width: 100%;
  @media (min-width: ${({ theme }) => theme.breakpoints.laptop}) {
    display: flex;
    gap: 2rem;
    align-items: center;
    width: auto;
  }
`;

const NavItem = styled.li`
  width: 100%;
  padding: 0.5rem;
  transition: opacity 0.3s ease-in-out;
  &:hover {
    opacity: 0.8;
  }
  @media (min-width: ${({ theme }) => theme.breakpoints.laptop}) {
    width: fit-content;
    padding: 0;
  }
`;

const ButtonWrapper = styled.div`
  display: flex;
  gap: 1rem;
  flex-direction: column;
  width: 100%;
  height: auto;
  @media (min-width: ${({ theme }) => theme.breakpoints.laptop}) {
    flex-direction: row;
    width: fit-content;
  }
`;

const NavLink = styled.a`
  cursor: pointer;
`;

export const MyNavigation = () => {
  const [isActive, setIsActive] = useState(false);
  const handleClick = () => {
    setIsActive(!isActive);
    console.log(isActive);
  };
  return (
    <Navigation>
      <Logo src={logo} alt="Logo" />
      <Hamburger onClick={handleClick} isActive={isActive} />
      <NavWrapper isActive={isActive}>
        <NavList>
          <NavItem>
            <NavLink>Strona główna</NavLink>
          </NavItem>
          <NavItem>
            <NavItem>
              <NavLink>Nasza flota</NavLink>
            </NavItem>
          </NavItem>
          <NavItem>
            <NavItem>
              <NavLink>Kontakt</NavLink>
            </NavItem>
          </NavItem>
          <ButtonWrapper>
            <Button>Zaloguj się</Button>
            <Button>Zarejestruj się</Button>
          </ButtonWrapper>
        </NavList>
      </NavWrapper>
    </Navigation>
  );
};
