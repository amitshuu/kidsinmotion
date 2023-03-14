import React from 'react';
import Carousel from 'react-multi-carousel';
import styled from 'styled-components';
import { customers } from '../utils/ourCustomers';
import { mobile } from '../utils/responsive';

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
        <div>
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
`;
const Container = styled.div`
  width: 100%;
  padding: 2rem 6rem;
  justify-content: center;
  align-items: center;
  text-align: center;
  background-color: #81808013;
  border-radius: 16px;
  ${mobile({ padding: '2rem' })}
`;

const Title = styled.h2`
  font-size: 36px;
  display: inline-block;
  text-align: center;
  color: #333;
  font-weight: 500;
  ${mobile({ fontSize: '32px' })}
`;
const SubTitle = styled.span`
  direction: rtl;
  font-size: 38px;
  margin-bottom: 3rem;
  display: inline-block;
  text-align: center;
  color: var(--clr-orange-title);
  font-weight: 600;
  ${mobile({ fontSize: '42px' })}
`;

const Image = styled.img`
  width: 136px;
  height: 86px;
  pointer-events: none;
  object-fit: cove;
`;
