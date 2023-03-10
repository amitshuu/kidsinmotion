import React from 'react';
import styled from 'styled-components';
import navLogo from '../assets/kidsinmotion-nav_logo.png';
import { mobile } from '../utils/responsive';
import NavbarLogo from './NavbarLogo';
import { GiHamburgerMenu } from 'react-icons/gi';
import { Link, Element } from 'react-scroll';
import { nav_links } from '../utils/navLinks';

const Navbar = () => {
  return (
    <Element name='home'>
      <NavWrapper>
        <NavLinksDiv>
          {nav_links.map((link: any) => {
            return (
              <NavLink
                icon={link.icon}
                to={link.to}
                duration={500}
                smooth={true}
              >
                {link.icon ? <link.icon /> : link.title}
              </NavLink>
            );
          })}
        </NavLinksDiv>
        <MobileNav>
          <GiHamburgerMenu className='menu-icon' />
          <NavbarLogo />
        </MobileNav>
      </NavWrapper>
    </Element>
  );
};

export default Navbar;

const NavWrapper = styled.div`
  margin: 2rem 0rem;
  display: flex;
  justify-content: center;
`;

const NavLinksDiv = styled.div`
  display: flex;
  width: 80%;
  align-items: center;
  justify-content: center;
  justify-content: space-evenly;
  ${mobile({ display: 'none' })}
`;

const NavLink = styled(Link)<{ icon: any }>`
  font-size: 18px;
  padding: 6px 30px;
  cursor: pointer;
  transition: all 0.2s ease-out;
  border-radius: 12px;
  ${mobile({ display: 'none' })}
  &:hover {
    background-color: ${({ icon }) => (icon ? 'none' : '#8180802e')};
  }
`;

const NavLogo = styled.div`
  ${mobile({ display: 'none' })}
`;

const MobileNav = styled.div`
  display: none;
  width: 100%;
  align-items: center;
  padding: 0 20px;
  /* margin-bottom: 2rem; */
  justify-content: space-between;

  .menu-icon {
    font-size: 42px;
    color: var(--clr-orange-title);
    font-weight: 400;
  }
  ${mobile({ display: 'flex' })}
`;

const MobileTitle = styled.p`
  font-size: 28px;
`;
