import { Link } from 'react-scroll';
import styled from 'styled-components';
import bird from '../assets/logo_with_shadow.png';
import { mobile } from '../utils/responsive';
import BackgroundImage from '../assets/gplaypattern.png';
const Hero = () => {
  return (
    <HeroWrapper>
      <Container>
        <HeroImageDiv>
          <HeroImg src={bird} />
          <ImgTitle>ילדים בתנועה</ImgTitle>
        </HeroImageDiv>
        <HeroTextDiv>
          <HeroTitle>
            המקום ללמוד
            <p>
              כישורים <span>לחיים</span>
            </p>
          </HeroTitle>
          <HeroDescription>
            בואו להצטרף אלינו להרפתקה מהנה
            <p className='description'>שתעורר השראה ותאתגר את ילדכם!</p>
          </HeroDescription>
          <ButtonContainer>
            <Link to='contact-us' duration={500} smooth={true}>
              <ContactButton>צרו קשר</ContactButton>
            </Link>
            <Link to='activities' duration={500} smooth={true}>
              <HeroButton>עוד עלינו</HeroButton>
            </Link>
          </ButtonContainer>
        </HeroTextDiv>
      </Container>
    </HeroWrapper>
  );
};

export default Hero;

const HeroWrapper = styled.div`
  margin: 3rem auto;
  display: flex;
  width: 100%;
  height: 100%;
  padding: 3rem 4rem;
  background-image: url(${BackgroundImage});
  ${mobile({ display: 'none' })}

  border-radius: 16px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  ${mobile({ padding: '0' })}
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: 1250px;
  max-height: 350px;
  ${mobile({ maxHeight: '450px', padding: '0px' })}
`;
const HeroImageDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  width: 100%;
  max-width: 1250px;

  ${mobile({ alignItems: 'center', width: '100%' })}
`;

const HeroTextDiv = styled.div`
  display: flex;
  min-width: 450px;
  align-items: end;
  flex-direction: column;
  width: 100%;

  span {
    color: var(--clr-orange-title);
  }
  ${mobile({ display: 'none' })}
`;

const HeroImg = styled.img`
  max-width: 300px;
  max-height: 350px;
  align-items: center;
  ${mobile({ width: '75%' })}
`;

const ImgTitle = styled.p`
  font-size: 48px;
  letter-spacing: 3px;
  font-weight: 600;
  text-shadow: 2px 3px 4px rgba(0, 0, 0, 0.3);
  color: #333;
  ${mobile({ letterSpacing: '0px', marginBottom: '20px' })}
`;
const HeroTitle = styled.h1`
  font-size: 62px;
  line-height: 120%;
  margin-bottom: 1rem;
  color: #333;
  letter-spacing: 1.5px;
  direction: rtl;
`;

const HeroDescription = styled.p`
  direction: rtl;
  font-size: 24px;
  color: #333;
  font-weight: 400;
  letter-spacing: 2px;
  line-height: 160%;
  .description {
  }
`;

const ButtonContainer = styled.div`
  margin-top: 2rem;
  display: flex;
`;

const HeroButton = styled.button`
  background-color: #333;
  outline: none;
  border: none;
  color: white;
  letter-spacing: 1px;
  font-size: 16px;
  padding: 11px 25px 10px 27px;
  border-radius: 16px;
  cursor: pointer;
  transition: transform 0.3s ease;
  &:hover {
    transform: scale(1.1);

    background-color: #b4d39b;
  }
`;

const ContactButton = styled.button`
  /* background-color: #ff5757d2; */
  background-color: #ff914de1;

  cursor: pointer;
  outline: none;
  border: none;
  color: white;
  letter-spacing: 1px;
  font-size: 16px;
  padding: 11px 25px 10px 27px;
  border-radius: 16px;
  margin-right: 1.5rem;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.1);
    background-color: #b4d39b;
  }
`;
