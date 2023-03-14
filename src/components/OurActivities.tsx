import React from 'react';
import styled from 'styled-components';
import breakdance from '../assets/breakdanceee.jpg';
import hiphop from '../assets/hip-hop.jpg';
import capoeira from '../assets/capoeira.jpg';
import workshop from '../assets/workshops.jpg';
import { mobile } from '../utils/responsive';
import { Element } from 'react-scroll';

const OurActivities = () => {
  return (
    <Element name='activities'>
      <Wrapper>
        <h2 className='title'> ✨ הפעילויות שלנו</h2>

        <Container>
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
        </Container>
      </Wrapper>
    </Element>
  );
};

export default OurActivities;

const Wrapper = styled.section`
  text-align: center;
  margin-top: 3rem;
  margin-bottom: 3rem;
  .title {
    ${mobile({ fontSize: '42px' })};
  }
  .test {
    display: flex;
    width: 100%;
    flex-direction: column;
  }
`;

const Container = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  padding: 3rem 2rem;
  background-color: #81808013;
  align-items: center;
  justify-content: center;
  border-radius: 16px;
`;

const ActivitiesFlex = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  ${mobile({ flexWrap: 'wrap' })}
`;

const ActivityDiv = styled.div<{ imageUrl: string }>`
  display: flex;
  width: 30%;
  margin: 0 1rem;
  max-height: 175px;
  border-radius: 16px;
  padding: 0.6rem;
  background-image: url(${({ imageUrl }) => imageUrl});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  height: 250px;
  align-items: end;
  flex-direction: row-reverse;
  box-shadow: 0px -80px 54px -17px rgba(0, 0, 0, 0.62) inset;
  ${mobile({ width: '100%', marginBottom: '2rem', maxHeight: '220px' })}
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
  ${mobile({ fontSize: '28px' })}
  p {
    display: inline-block;
    font-weight: 500;
    letter-spacing: 1px;
    ${mobile({ marginTop: '12px' })}
  }
`;
