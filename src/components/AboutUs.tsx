import React from 'react';
import styled from 'styled-components';
import AboutUsPhoto from '../assets/dummy.png';
import DummyIcon from '../assets/dummy_icon.png';
import AboutUs2 from './LifeSkills';

const AboutUs = () => {
  return (
    <Wrapper>
      <Title>קצת עלינו</Title>
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <Container>
          <TextContainer>
            <SubTitleDiv>
              <SubTitle>Kids In Motion</SubTitle>
              <img style={{ width: '50px', height: '50px' }} src={DummyIcon} />
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
  );
};

export default AboutUs;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
`;
const Title = styled.h1`
  font-size: 62px;
  margin-bottom: 3rem;
  color: #333;
  border-bottom: 5px solid var(--clr-orange-title);
`;

const Container = styled.div`
  display: flex;
  width: 100%;
  padding: 3rem 5rem;
  margin-bottom: 3rem;
  background-color: #81808013;
  align-items: center;
  border-radius: 16px;
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
`;
const Image = styled.img`
  width: 85%;
  border-radius: 1rem;
`;

const SubTitle = styled.p`
  text-align: center;
  letter-spacing: 1px;
  font-size: 38px;
  color: var(--clr-red-title);
  font-weight: 600;
  margin-right: 1rem;
  margin-bottom: 0.5rem;
`;

const SubTitleDiv = styled.div`
  display: flex;
  text-align: center;
  margin: 0 auto;
`;
