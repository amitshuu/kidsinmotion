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
  /* overflow-x: scroll; */
  -webkit-overflow-scrolling: touch; /* Add this line */
  align-items: center;

  &::-webkit-scrollbar {
    display: block;
    width: 5px;
    height: 5px;
  }

  /* Style the scrollbar track and thumb */
  &::-webkit-scrollbar-track {
    background-color: #f2f2f2;
    border-radius: 10px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #c7c7cc;
    border-radius: 10px;
    width: 2px;
  }

  /* Style the scrollbar corner */
  &::-webkit-scrollbar-corner {
    background-color: transparent;
  }
  ${mobile({
    overflowX: 'scroll',
    alignItems: 'center',
    justifyContent: 'flex-start',
    padding: '0rem 0.3rem 1rem 0rem',
  })}
`;

const ActivityDiv = styled.div<{ imageUrl: string }>`
  display: flex;
  width: 100%;
  padding: 0.5rem;
  margin: 0 1rem;
  max-width: 350px;
  min-height: 250px;
  border-radius: 16px;
  background-image: url(${({ imageUrl }) => imageUrl});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  align-items: end;
  flex-direction: row-reverse;
  box-shadow: 0px -80px 54px -17px rgba(0, 0, 0, 0.7) inset;
  ${mobile({ minHeight: '225px', minWidth: '275px' })}
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
