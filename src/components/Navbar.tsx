import React from 'react';
import styled from 'styled-components';
import navLogo from '../assets/kidsinmotion-nav_logo.png';
import NavbarLogo from './NavbarLogo';

const Navbar = () => {
  return (
    <NavWrapper>
      <NavLinksDiv>
        <NavLink>גלרייה</NavLink>
        <NavLink>פעילויות</NavLink>
        <NavbarLogo />
        <NavLink>אודות</NavLink>
        <NavLink>בית</NavLink>
      </NavLinksDiv>
    </NavWrapper>
  );
};

export default Navbar;

const NavWrapper = styled.div`
  margin-top: 2rem;
  display: flex;
  justify-content: center;
`;

const NavLinksDiv = styled.div`
  display: flex;
  width: 80%;
  align-items: center;
  justify-content: center;
  justify-content: space-evenly;
`;

const NavLink = styled.p`
  font-size: 18px;
  cursor: pointer;
`;

const NavLogo = styled.img``;
