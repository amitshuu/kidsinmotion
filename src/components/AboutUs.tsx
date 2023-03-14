import React from 'react';
import styled from 'styled-components';
import AboutUsPhoto from '../assets/dummy.png';
import DummyIcon from '../assets/dummy_icon.png';
import { mobile } from '../utils/responsive';
import { Element } from 'react-scroll';
// import Container from './Container';
import AboutUs2 from './LifeSkills';

const AboutUs = () => {
  return (
    <Element name='about-us'>
      <Wrapper id='about-us'>
        <h1 className='title'>קצת עלינו</h1>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <Container>
            <TextContainer>
              <SubTitleDiv>
                <SubTitle>Kids In Motion</SubTitle>
                <img
                  style={{ width: '50px', height: '50px' }}
                  src={DummyIcon}
                />
              </SubTitleDiv>
              <Description>
                העסק שלנו מוקדש לספק פעילויות מהנות ומרתקות לילדים. אנו מציעים
                הופעות בשילוב קהל, שיעורים וסדנאות שנתיות בכדי לעזור לילדים לפתח
                את כישוריהם בנושאים מגוונים כמו פיתוח כישורי מוטוריקה
                וקואורדינציה. המדריכים המנוסים שלנו נלהבים לעבוד עם ילדים וליצור
                סביבת למידה חיובית ותומכת. אנו מאמינים בחשיבות של מתן הזדמנויות
                לתלמידים לחקור את תחומי העניין שלהם ולפתח מיומנויות חדשות.
              </Description>
              {/* <Description>
              החזון שלנו הוא להפוך כל ילד וילדה לרקדני בית הספר ולהביא איתנו
              משהו חדש ומיוחד, עולם ההיפ הופ והברייקדאנס בפרט. הרעיון הוא לשבור
              שגרה וללמוד דרך המוזיקה והריקוד שיעור לחיים! הרצון שלנו להביא
              שיעור אינטראקטיבי, אתגרי, כיפי ומיוחד במינו אשר יפתח ויקדם כל ילד
              וילדה אם זה בקבוצה או לחוד. הילדים ילמדו שבלתי אפשרי יכול הפוך
              לאפשרי עם קצת ידע והמון רצון !
            </Description> */}
            </TextContainer>
            <ImageContainer>
              <Image src={AboutUsPhoto} alt='about-us_photo' />
            </ImageContainer>
          </Container>
        </div>
      </Wrapper>
    </Element>
  );
};

export default AboutUs;

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  .title {
    ${mobile({ fontSize: '46px' })};
  }
`;

const Container = styled.div`
  display: flex;
  width: 100%;
  text-align: center;
  background-color: #81808013;
  flex-direction: row;
  border-radius: 16px;
  padding: 3rem 2rem;
  ${mobile({
    flexDirection: 'column',
    padding: '1rem',
  })}
`;

const ImageContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: end;
`;
const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;
const Description = styled.p`
  direction: rtl;
  font-weight: 500;
  line-height: 2;
  letter-spacing: 1px;
  font-size: 22px;
  color: #333;
  ${mobile({
    fontSize: '18px',
    letterSpacing: '0px',
    margin: '1rem 0rem',
    textAlign: 'center',
  })}
`;
const Image = styled.img`
  width: 85%;
  object-fit: cover;
  border-radius: 1rem;
  ${mobile({ display: 'none' })}
`;

const SubTitle = styled.p`
  text-align: center;
  letter-spacing: 1px;
  font-size: 38px;
  color: var(--clr-red-title);
  font-weight: 600;
  margin-right: 1rem;
  margin-bottom: 0.5rem;

  ${mobile({ fontSize: '32px', letterSpacing: '0px' })}
`;

const SubTitleDiv = styled.div`
  display: flex;
  justify-content: center;
  text-align: center;
  width: 100%;
  margin: 0 auto;
`;
