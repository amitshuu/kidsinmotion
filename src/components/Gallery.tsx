import React, { useState } from 'react';
import styled from 'styled-components';
import { slide_images } from '../utils/imageSlides';
import { mobile } from '../utils/responsive';
import { Element } from 'react-scroll';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import LazyLoad from 'react-lazyload';
import BackgroundImage from '../assets/gplaypattern.png';

import { ColorRing } from 'react-loader-spinner';
const Gallery = () => {
  const [isLoading, setIsLoading] = useState(true);
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 1, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1250, min: 464 },
      items: 2,
      slidesToSlide: 1, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 773, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };

  return (
    <ElementDiv name='gallery'>
      <h2 className='title'>הגלרייה שלנו</h2>
      <Wrapper>
        <Container>
          <LazyLoad
            height={'30px'}
            debounce={false}
            once
            placeholder={
              <ColorRing
                visible={true}
                height='80'
                width='80'
                ariaLabel='blocks-loading'
                wrapperStyle={{}}
                wrapperClass='blocks-wrapper'
                colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']}
              />
            }
          >
            <div
              style={{
                paddingBottom: '40px',
                position: 'relative',
              }}
            >
              <Carousel
                rtl={false}
                responsive={responsive}
                additionalTransfrom={0}
                arrows
                draggable={false}
                centerMode={false}
                containerClass='container-with-dots'
                dotListClass='dots'
                focusOnSelect={false}
                infinite
                itemClass=''
                rewind={false}
                rewindWithAnimation={false}
                showDots={true}
                renderButtonGroupOutside={false}
                renderDotsOutside
                sliderClass=''
                slidesToSlide={1}
                // swipeable={false}
                minimumTouchDrag={1}
              >
                {slide_images.map((image) => {
                  return <SlideImage src={image.img} />;
                })}
              </Carousel>
            </div>
          </LazyLoad>
        </Container>
      </Wrapper>
    </ElementDiv>
  );
};

export default Gallery;

const ElementDiv = styled(Element)`
  text-align: center;
  .title {
    ${mobile({ fontSize: '48px' })};
  }
`;
const Wrapper = styled.section`
  text-align: center;
  width: 100%;
  margin-bottom: 3rem;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  background-image: url(${BackgroundImage});
  padding: 3rem;
  border-radius: 16px;
  ${mobile({ padding: '1rem' })}
  .react-multi-carousel-dot--active button {
    background: var(--clr-orange-title);
    color: red !important;
  }
  .dots {
    button {
      border: transparent;
      border: 2px solid #ccc;
    }
  }

  */ .active {
    display: flex;
  }

  .slide-active {
    opacity: 1;
    transition-duration: 1s;
    transform: scale(1.08);
  }

  .slide {
    opacity: 0;
    transition-duration: 1s ease;
  }
  .arrow-icon {
    color: #333;
    &:hover {
      color: var(--clr-orange-title);
      transition: 0.3s all ease-in-out;
      cursor: pointer;
    }
  }
`;

const Container = styled.div`
  width: 100%;
  padding: 2rem 0rem;
  text-align: center;
  border-radius: 16px;
`;
const SlideImage = styled.img`
  outline: none;
  min-height: 275px;
  object-fit: cover;
  border-radius: 16px;
  cursor: pointer;
  max-width: 350px;
  ${mobile({ maxWidth: '315px' })}
`;
