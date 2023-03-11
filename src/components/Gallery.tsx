import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { slide_images } from '../utils/imageSlides';
import 'react-slideshow-image/dist/styles.css';
import { BsFillArrowRightCircleFill } from 'react-icons/bs';
import { BsFillArrowLeftCircleFill } from 'react-icons/bs';
import { mobile } from '../utils/responsive';
import { Element, scroller } from 'react-scroll';
import LazyLoad from 'react-lazyload';
const Gallery = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const goToPrevSlide = () => {
    return currentImageIndex === 0
      ? setCurrentImageIndex(slide_images.length - 1)
      : setCurrentImageIndex((current) => current - 1);
  };

  const goToNextSlide = () => {
    return currentImageIndex === slide_images.length - 1
      ? setCurrentImageIndex(0)
      : setCurrentImageIndex((current) => current + 1);
  };

  return (
    <Element name='gallery'>
      <Wrapper>
        <h2 className='title'>הגלרייה שלנו</h2>
        <Container>
          <SlideButton>
            <BsFillArrowLeftCircleFill
              className='arrow-icon'
              onClick={goToPrevSlide}
            />
          </SlideButton>
          <>
            {slide_images.map((image, index) => {
              return (
                <SliderItem
                  className={
                    index === currentImageIndex ? 'slide-active' : 'slide'
                  }
                  key={image.img}
                >
                  {index === currentImageIndex && (
                    <LazyLoad height='375px'>
                      <SlideImage src={slide_images[currentImageIndex].img} />
                    </LazyLoad>
                  )}
                </SliderItem>
              );
            })}
          </>
          <SlideButton onClick={goToNextSlide}>
            <BsFillArrowRightCircleFill className='arrow-icon' />
          </SlideButton>
        </Container>
      </Wrapper>
    </Element>
  );
};

export default Gallery;

const Wrapper = styled.section`
  text-align: center;
  width: 100%;
  margin-bottom: 3rem;
  .active {
    display: flex;
  }
  .title {
    ${mobile({ fontSize: '46px' })};
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
  display: flex;
  width: 100%;
  padding: 3rem 5rem;
  background-color: #81808013;
  align-items: center;
  justify-content: center;
  border-radius: 16px;
  ${mobile({ padding: '2rem' })}
`;
const SlideImage = styled.img`
  width: 650px;
  outline: none;
  height: 375px;
  object-fit: fill;
  border-radius: 16px;
  ${mobile({ width: '225px', height: '200px' })}
`;

const SlideButton = styled.button`
  outline: none;
  background-color: transparent;
  border: none;
  font-size: 36px;
  margin: 0 3rem;
  ${mobile({ margin: '0 2rem', fontSize: '24px' })}
`;

const SliderItem = styled.div``;
const Test = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;
