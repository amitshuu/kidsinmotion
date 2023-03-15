import React from 'react';
import Carousel from 'react-multi-carousel';
import styled from 'styled-components';
import { customers } from '../utils/ourCustomers';
import { mobile } from '../utils/responsive';
import BackgroundImage from '../assets/gplaypattern.png';

const OurCustomers = () => {
  return (
    <Wrapper>
      <h2 className='title'>הלקוחות שלנו</h2>
      <Container>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          <Title>אנו עובדים עם מספר מוסדות חינוך</Title>
          <SubTitle> שותפי החינוך שלנו:</SubTitle>
        </div>
        <div style={{ padding: '15px' }}>
          <Carousel
            additionalTransfrom={0}
            arrows={false}
            autoPlay={true}
            draggable={false}
            autoPlaySpeed={1000}
            centerMode={false}
            className=''
            containerClass='container-with-dots'
            dotListClass=''
            infinite
            pauseOnHover={true}
            renderDotsOutside={false}
            responsive={{
              desktop: {
                breakpoint: {
                  max: 3000,
                  min: 1024,
                },
                items: 4,
                partialVisibilityGutter: 40,
              },
              mobile: {
                breakpoint: {
                  max: 464,
                  min: 0,
                },
                items: 2,
                partialVisibilityGutter: 30,
              },
              tablet: {
                breakpoint: {
                  max: 1024,
                  min: 464,
                },
                items: 2,
                partialVisibilityGutter: 30,
              },
            }}
            rewind={false}
            rewindWithAnimation={false}
            rtl={false}
            shouldResetAutoplay
            showDots={false}
            sliderClass=''
            slidesToSlide={1}
            swipeable
          >
            {customers.map((image) => {
              return <Image src={image.customerImage} />;
            })}
          </Carousel>
        </div>
      </Container>
    </Wrapper>
  );
};

export default OurCustomers;

const Wrapper = styled.div`
  text-align: center;
  margin-bottom: 3rem;
  .container-with-dots {
    width: 100%;
    display: flex;
    align-items: center;
  }
  .title {
    ${mobile({ fontSize: '42px' })}
  }
`;
const Container = styled.div`
  width: 100%;
  padding: 4rem;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  justify-content: center;
  align-items: center;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  text-align: center;
  background-image: url(${BackgroundImage});
  background-color: #81808013;
  border-radius: 16px;
  ${mobile({ padding: '1.5rem 0rem' })}
`;

const Title = styled.h2`
  font-size: 42px;
  display: inline-block;
  text-align: center;
  color: #333;
  font-weight: 500;
  ${mobile({ fontSize: '30px' })}
`;
const SubTitle = styled.span`
  direction: rtl;
  font-size: 46px;
  margin-bottom: 3rem;
  display: inline-block;
  text-align: center;
  color: var(--clr-orange-title);
  font-weight: 600;
  ${mobile({ fontSize: '32px', marginTop: '1rem' })}
`;

const Image = styled.img`
  width: 125px;
  height: 86px;
  pointer-events: none;
  object-fit: fill;
  z-index: 2;
`;
