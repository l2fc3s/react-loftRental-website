import React, { useState, useRef, useEffect } from "react";
import "./Gallery.css";
import styled, { css } from "styled-components/macro";
import { Button } from "../../Button";
import { IoMdArrowRoundForward } from "react-icons/io";
import { IoChevronBackCircle, IoChevronForwardCircle } from "react-icons/io5";

const GallerySection = styled.section`
  height: 100vh;
  max-height: 1100px;
  position: relative;
  overflow: hidden;
`;

const GalleryWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  position: relative;
`;

const GallerySlide = styled.div`
  z-index: 1;
  width: 100%;
  height: 100%;
`;

const GallerySlider = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  &::before {
    content: "";
    position: absolute;
    z-index: 2;
    width: 100%;
    height: 100vh;
    bottom: 0vh;
    left: 0;
    overflow: hidden;
    opacity: 0.4;
    background: linear-gradient(
      0deg,
      rgba(0, 0, 0, 0.2) 0%,
      rgba(0, 0, 0, 0.2) 50%,
      rgba(0, 0, 0, 0.6) 100%
    );
  }
`;

const GalleryImage = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  object-fit: cover;
`;

const GalleryContent = styled.div`
  position: relative;
  z-index: 10;
  display: flex;
  flex-direction: column;
  max-width: 1600px;
  width: calc(100% - 100px);
  color: #fff;

  h1 {
    font-size: clamp(1rem, 8vw, 2rem);
    font-weight: 400;
    text-transform: uppercase;
    text-shadow: 0px 0px 20px rgba(0, 0, 0, 0.4);
    text-align: left;
    margin-bottom: 0.8rem;
  }

  p {
    margin-bottom: 1.2rem;
    text-shadow: 0px 0px 20px rgba(0, 0, 0, 0.4);
  }
`;

const Arrow = styled(IoMdArrowRoundForward)`
  margin-left: 0.2rem;
  position: relative;
  top: 3.1px;
`;

const SliderButtons = styled.div`
  position: absolute;
  bottom: 50px;
  right: 50px;
  display: flex;
  z-index: 10;
`;

const arrowButtons = css`
  width: 30px;
  height: 30px;
  color: #565656;
  cursor: pointer;
  background: #fff;
  border-radius: 50px;
  // padding: 10px;
  margin-right: 1rem;
  user-select: none;
  transition: 0.3s;

  &:hover {
    background: #c09f80;
    transform: scale(1.05);
  }
`;

const PrevArrow = styled(IoChevronBackCircle)`
  ${arrowButtons}
`;
const NextArrow = styled(IoChevronForwardCircle)`
  ${arrowButtons}
`;

function Gallery({ slides }) {
  const [current, setCurrent] = useState(0);
  const length = slides.length;
  const timeout = useRef(null);

  useEffect(() => {
    const nextImage = () => {
      setCurrent((current) => (current === length - 1 ? 0 : current + 1));
    };

    timeout.current = setTimeout(nextImage, 3000);

    return function () {
      if (timeout.current) {
        clearTimeout(timeout.current);
      }
    };
  }, [current, length]);

  const nextSlide = () => {
    if (timeout.current) {
      clearTimeout(timeout.current);
    }

    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    if (timeout.current) {
      clearTimeout(timeout.current);
    }

    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(slides) || length <= 0) {
    return null;
  }

  return (
    <GallerySection>
      <GalleryWrapper>
        {slides.map((slide, index) => {
          return (
            <GallerySlide key={index}>
              {index === current && (
                <GallerySlider>
                  <GalleryImage src={slide.image} alt={slide.alt} />
                  <GalleryContent>
                    <h1>{slide.title}</h1>
                    <p>{slide.price}</p>
                    <Button buttonSize="btn" to={slide.path}>
                      {slide.label}
                      <Arrow />
                    </Button>
                  </GalleryContent>
                </GallerySlider>
              )}
            </GallerySlide>
          );
        })}
        <SliderButtons>
          <PrevArrow onClick={prevSlide} />
          <NextArrow onClick={nextSlide} />
        </SliderButtons>
      </GalleryWrapper>
    </GallerySection>
  );
}

export default Gallery;
