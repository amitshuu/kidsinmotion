import styled from 'styled-components';
import { contact_us } from '../utils/contactUsLinks';
import ContactUsForm from './ContactUsForm';
import { mobile } from '../utils/responsive';
import BackgroundImage from '../assets/gplaypattern.png';
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

        <ContactUsForm />
      </Container>
    </Wrapper>
  );
};

export default ContactUs;

const Wrapper = styled(Element)`
  text-align: center;
  margin-bottom: 3rem;
  .title {
    ${mobile({ fontSize: '42px' })}
  }
`;
const Container = styled.div`
  display: flex;
  flex-direction: column;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);

  width: 100%;
  background-image: url(${BackgroundImage});
  text-align: center;
  border-radius: 16px;
`;

const LinksContainer = styled.div`
  flex-direction: row-reverse;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin-bottom: 1rem;

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
  justify-content: center;
  width: 25%;
  ${mobile({
    width: '100%',
    padding: '2rem',
  })}
`;

const LinkTitle = styled.p`
  direction: rtl;
  color: var(--clr-orange-title);
  font-size: 22px;
  font-weight: bold;
`;
const LinkIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50px;
  color: #333;
  height: 50px;
  border-radius: 50%;
  font-size: 16px;
  margin-bottom: 10px;
  background-color: var(--clr-orange-title);
`;
const LinkValue = styled.p`
  color: #333;
  font-size: 18px;
  font-weight: 600;
`;

const SubTitle = styled.p`
  font-size: 42px;
  color: #333;
  margin-bottom: 2rem;
  ${mobile({
    margin: '1rem 0rem',
  })}
`;
