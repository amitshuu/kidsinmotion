import React from 'react';
import styled from 'styled-components';
import navLogo from '../assets/kidsinmotion-nav_logo.png';
import { mobile } from '../utils/responsive';
import NavbarLogo from './NavbarLogo';
import { GiHamburgerMenu } from 'react-icons/gi';
import { Link, Element } from 'react-scroll';
import { nav_links } from '../utils/navLinks';
import { HiPhone } from 'react-icons/hi';
import BackgroundImage from '../assets/gplaypattern.png';

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
          <MobileIcon to='contact-us' smooth={true} duration={500}>
            <HiPhone className='menu-icon' />
            <MobileIconP>צרו קשר</MobileIconP>
          </MobileIcon>
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

const MobileIcon = styled(Link)`
  background-color: #333;
  display: flex;
  align-items: center;
  background: transparent;
  border: 1px solid #333;
  outline: none;
  color: white;
  letter-spacing: 1px;
  font-size: 16px;
  padding: 0.2rem;
  border-radius: 16px;
  cursor: pointer;
  /* ${mobile({ display: 'block' })} */
`;

const MobileIconP = styled.p`
  margin: 0rem 1rem;
  font-size: 20px;
  color: #333;
  /* color: #fff; */
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
  display: inline-block;
  font-size: 20px;
  color: #333;
  /* padding: 6px 30px; */
  cursor: pointer;
  transition: all 0.2s ease-out;
  ${mobile({ display: 'none' })}
  &:hover {
    color: var(--clr-orange-title);
    /* background-color: ${({ icon }) => (icon ? 'none' : '#8180802e')}; */
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
  background-image: url(${BackgroundImage});
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  border-radius: 16px;
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
