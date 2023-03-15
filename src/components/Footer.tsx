import React from 'react';
import { Link, Element } from 'react-scroll';
import styled from 'styled-components';
import { footer_links, nav_links } from '../utils/navLinks';
import { mobile } from '../utils/responsive';

const Footer = () => {
  return (
    <Wrapper>
      <Container>
        <FooterLinks>
          {footer_links.map((link: any) => {
            return (
              <FooterLink to={link.to} smooth={true} duration={500}>
                {link.title}
              </FooterLink>
            );
          })}
        </FooterLinks>
        <CopyRight>&copy; כל הזכויות שמורות לילדים בתנועה</CopyRight>
        <MadeBy>
          אתר זה נבנה על ידי{' '}
          <ContactAmit target='_blank' href='https://wa.me/972549445667'>
            Amit Shukrun
          </ContactAmit>
        </MadeBy>
      </Container>
    </Wrapper>
  );
};

export default Footer;

const Wrapper = styled.footer`
  background-color: #161616;
  width: 100%;
  padding: 2rem;
`;

const MadeBy = styled.p`
  color: #fff;
  direction: rtl;
`;

const ContactAmit = styled.a`
  font-weight: 600;
  border-bottom: 2px solid var(--clr-orange-title);
  cursor: pointer;
  color: inherit;
  text-decoration: none;
`;
const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const CopyRight = styled.p`
  color: #ccc;
  margin-bottom: 1rem;
`;
const FooterLinks = styled.div`
  display: flex;
  justify-content: space-between;
  width: 25%;
  ${mobile({ width: '75%' })}
`;
const FooterLink = styled(Link)`
  color: #fff;

  cursor: pointer;
  font-size: 18px;
  transition: 0.2s all ease-in-out;
  margin-bottom: 1.5rem;
  &:hover {
    color: var(--clr-orange-title);
  }
`;
