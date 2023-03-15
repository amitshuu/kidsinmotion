import styled from 'styled-components';
import breakdance from '../assets/breakdanceee.jpg';
import hiphop from '../assets/hip-hop.jpg';
import capoeira from '../assets/capoeira.jpg';
import workshop from '../assets/show.png';
import { mobile } from '../utils/responsive';
import { Element } from 'react-scroll';
import BackgroundImage from '../assets/gplaypattern.png';

const OurActivities = () => {
  return (
    <Element name='activities'>
      <Wrapper>
        <h2 className='title'> הפעילויות שלנו</h2>

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
                <ActivityTitle>מופעים</ActivityTitle>
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
`;

const Container = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  padding: 5rem 2rem;
  background-image: url(${BackgroundImage});
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  align-items: center;
  justify-content: center;
  border-radius: 16px;
  ${mobile({ padding: '2rem 1rem' })}
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
  width: 100%;
  margin: 0 1rem;
  max-width: 350px;
  border-radius: 16px;
  background-image: url(${({ imageUrl }) => imageUrl});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  min-height: 250px;
  align-items: end;
  flex-direction: row-reverse;
  box-shadow: 0px -80px 54px -17px rgba(0, 0, 0, 0.62) inset;
  ${mobile({ marginBottom: '2rem' })}
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
  ${mobile({ fontSize: '26px' })}
  p {
    display: inline-block;
    font-weight: 500;
    margin-top: 1rem;
    /* letter-spacing: 1px; */
    ${mobile({ marginTop: '10px' })}
  }
`;
