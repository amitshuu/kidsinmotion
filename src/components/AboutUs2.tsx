import React from 'react';
import styled from 'styled-components';
import flex from '../assets/flexabilty.png';
import cordination from '../assets/cordination.png';
import creativity from '../assets/creativity.png';
import self from '../assets/self-relizations.png';

const AboutUs2 = () => {
  return (
    <Wrapper>
      <Title>במשך השנה הילדים ירכשו כלים לחיים</Title>
      <Container>
        <SkillsContainer>
          <SkillDiv>
            <SkillIcon src={flex} />
            <SkillTitle>גמישות</SkillTitle>
            <SkillDescription>
              עם השיעורים המהנים והמרתקים שלנו, ילדכם ילמד להיות גמיש יותר ובטוח
              בתנועותיו, מה שיכול לעזור לו גם בתחומים אחרים בחייו
            </SkillDescription>
          </SkillDiv>
          <SkillDiv>
            <SkillIcon src={cordination} />
            <SkillTitle>קואורדינציה</SkillTitle>
            <SkillDescription>
              אנו שואפים לעזור לתלמידים לשפר את הקואורדינציה שלהם
              <br /> על ידי לימוד שגרות ריקוד המשלבות מגוון תנועות ומקצבים.
            </SkillDescription>
          </SkillDiv>
          <SkillDiv>
            <SkillIcon src={creativity} />
            <SkillTitle style={{ marginLeft: '10px' }}>יצירתיות</SkillTitle>
            <SkillDescription>
              אנו עוזרים לתלמידים לפתח את היצירתיות שלהם
              <br /> על ידי עידודם לחקור סגנונות ריקוד, מקצבים ותנועות שונות.
            </SkillDescription>
          </SkillDiv>
          <SkillDiv>
            <SkillIcon src={self} />
            <SkillTitle>הגשמה עצמית</SkillTitle>
            <SkillDescription>
              אנו שואפים לעזור לתלמידים לפתח את המודעות העצמית והביטוי העצמי
              שלהם על ידי עידודם לחקור את הרגשות, המחשבות והתחושות הפיזיות שלהם
              באמצעות ריקוד.
            </SkillDescription>
          </SkillDiv>
        </SkillsContainer>
      </Container>
    </Wrapper>
  );
};

export default AboutUs2;

const Wrapper = styled.div`
  text-align: center;
`;
const Title = styled.p`
  display: inline-block;
  font-size: 62px;
  text-align: center;
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

const SkillsContainer = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  /* margin-bottom: 3rem; */
`;
const SkillDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  height: 250px;
  width: 50%;
  padding: 0rem 1rem;
  /* max-height: 280px; */
  /* width: 0%; */
`;
const SkillIcon = styled.img`
  width: 96px;
  height: 90px;
  margin-bottom: 16px;
`;
const SkillTitle = styled.p`
  text-align: center;
  font-weight: 600;
  font-size: 28px;
  color: #ec7d10;
  margin-bottom: 4px;
`;

const SkillDescription = styled.p`
  direction: rtl;
  color: #333;
  font-size: 18px;
  font-weight: 500;
  line-height: 1.33;
`;
