import styled from 'styled-components';
import bird from '../assets/bird.png';
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
            <ContactButton>צרו קשר</ContactButton>
            <HeroButton>עוד עלינו</HeroButton>
          </ButtonContainer>
        </HeroTextDiv>
      </Container>
    </HeroWrapper>
  );
};

export default Hero;

const HeroWrapper = styled.div`
  margin: 5rem auto;
  display: flex;
  width: 100%;
  padding: 5rem 0rem;
  background-color: #81808013;
  border-radius: 16px;
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 0rem 5rem;
  max-height: 250px;
`;
const HeroImageDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const HeroTextDiv = styled.div`
  display: flex;
  width: 100%;
  align-items: end;
  flex-direction: column;
  span {
    color: var(--clr-red-title);
  }
`;

const HeroImg = styled.img`
  width: 350px;
  height: 210px;
  margin-bottom: 1rem;
`;

const ImgTitle = styled.p`
  font-size: 48px;
  letter-spacing: 3px;
  color: #333;
`;
const HeroTitle = styled.h1`
  font-size: 62px;
  line-height: 120%;
  margin-bottom: 1rem;
  color: var(--clr-orange-title);
  letter-spacing: 1px;
  direction: rtl;
`;

const HeroDescription = styled.p`
  direction: rtl;
  font-size: 22px;
  color: #333;
  font-weight: 400;
  letter-spacing: 4px;
  line-height: 160%;
  .description {
  }
`;

const ButtonContainer = styled.div`
  margin-top: 2rem;
  display: flex;
`;

const HeroButton = styled.button`
  background-color: #ff914de1;
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

    background-color: var(--clr-orange-title);
  }
`;

const ContactButton = styled.button`
  background-color: #ff5757d2;
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
    background-color: var(--clr-red-title);
  }
`;
