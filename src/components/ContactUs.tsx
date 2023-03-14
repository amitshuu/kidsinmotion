import React from 'react';
import styled from 'styled-components';
import { contact_us } from '../utils/contactUsLinks';
import ContactUsForm from './ContactUsForm';
import axios from 'axios';
import { mobile } from '../utils/responsive';
import { Element } from 'react-scroll';

const ContactUs = () => {
  return (
    <Wrapper name='contact-us'>
      <h2 className='title'>צרו קשר</h2>
      <Container>
        <LinksContainer>
          {contact_us.map((links: any) => {
            return (
              <LinkDiv>
                <LinkIcon>
                  <links.icon />
                </LinkIcon>
                <LinkTitle>{links.title}:</LinkTitle>
                <LinkValue>{links.value}</LinkValue>
              </LinkDiv>
            );
          })}
        </LinksContainer>
        <SubTitle>נשמח לשמוע ממך</SubTitle>
        <ContactUsForm />
      </Container>
    </Wrapper>
  );
};

export default ContactUs;

const Wrapper = styled(Element)`
  text-align: center;
  margin-bottom: 3rem;
`;
const Container = styled.div`
  width: 100%;
  background-color: #81808013;
  text-align: center;
  border-radius: 16px;
`;

const LinksContainer = styled.div`
  flex-direction: row-reverse;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin-bottom: 2rem;
  ${mobile({
    flexDirection: 'column',
    alignItems: 'center',
  })}
`;

const LinkDiv = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 3rem;
  width: 20%;
  ${mobile({
    width: '100%',
    padding: '2rem',
  })}
`;

const LinkTitle = styled.p`
  direction: rtl;
  color: var(--clr-orange-title);
  font-size: 20px;
  font-weight: bold;
`;
const LinkIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 35px;
  color: #333;
  height: 35px;
  border-radius: 50%;
  font-size: 16px;
  margin-bottom: 10px;
  background-color: var(--clr-orange-title);
`;
const LinkValue = styled.p`
  color: #333;
  font-size: 16px;
`;

const SubTitle = styled.p`
  font-size: 36px;
  color: #333;
  margin-bottom: 2rem;
  ${mobile({
    margin: '1rem 0rem',
  })}
`;
