import React from 'react';
import styled from 'styled-components';
import Container from './Container';
import breakdance from '../assets/breakdanceee.jpg';
import hiphop from '../assets/hip-hop.jpg';
import capoeira from '../assets/capoeira.jpg';
import workshop from '../assets/workshops.jpg';

const OurActivities = () => {
  return (
    <Wrapper>
      <h2 className='title'> ✨ הפעילויות שלנו</h2>

      <Container padding='3rem 2rem'>
        <div className='test'>
          <Title>
            מחפשים פעילות מהנה ובריאה לילדים שלכם?
            <br /> <p>שיעורי הריקוד שלנו הם הדרך המושלמת לגרום להם לזוז!</p>
          </Title>
          <ActivitiesFlex>
            <ActivityDiv imageUrl={breakdance}>
              <TextDiv>
                <ActivityTitle>ברייקדאנס</ActivityTitle>
              </TextDiv>
            </ActivityDiv>
            <ActivityDiv imageUrl={hiphop}>
              <TextDiv>
                <ActivityTitle>היפ-הופ</ActivityTitle>
              </TextDiv>
            </ActivityDiv>
            <ActivityDiv imageUrl={capoeira}>
              <TextDiv>
                <ActivityTitle>קפוארה</ActivityTitle>
              </TextDiv>
            </ActivityDiv>
            <ActivityDiv imageUrl={workshop}>
              <TextDiv>
                <ActivityTitle>סדנאות</ActivityTitle>
              </TextDiv>
            </ActivityDiv>
          </ActivitiesFlex>
        </div>
      </Container>
    </Wrapper>
  );
};

export default OurActivities;

const Wrapper = styled.section`
  text-align: center;
  margin-top: 3rem;
  margin-bottom: 3rem;
  .test {
    display: flex;
    width: 100%;
    flex-direction: column;
  }
`;

const ActivitiesFlex = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
`;

const ActivityDiv = styled.div<{ imageUrl: string }>`
  display: flex;
  width: 275px;
  border-radius: 16px;
  padding: 0.6rem;
  background-image: url(${({ imageUrl }) => imageUrl});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  height: 250px;
  align-items: end;
  position: relative;
  flex-direction: row-reverse;
  box-shadow: 0px -80px 54px -17px rgba(0, 0, 0, 0.62) inset;
`;
const TextDiv = styled.div`
  margin-right: 1rem;
  letter-spacing: 1px;
  font-weight: 500;
`;
const ActivityTitle = styled.p`
  align-self: start;
  color: #fff;
  font-size: 38px;
  width: 100%;
`;

const Title = styled.p`
  direction: rtl;
  margin-bottom: 3rem;
  font-size: 32px;
  font-weight: 600;
  color: #333;
  p {
    display: inline-block;
    font-weight: 500;
    /* border-bottom: 3px solid var(--clr-red-title); */
    letter-spacing: 1px;
  }
`;
