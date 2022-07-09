import React, { useState, useMemo } from "react";

const LeftButton = ({ onClick, currentId, slides }) => {
  if (currentId <= 0) {
    return <div></div>;
  }
  return <div onClick={onClick}>Left</div>;
};

const RightButton = ({ onClick, currentId, slides }) => {
  if (currentId >= slides.length - 1) {
    return <div></div>;
  }
  return <div onClick={onClick}>Right</div>;
};

export function SlideShow({ children }) {
  const [slideId, setSlideId] = useState(0);
  const childrenArr = React.Children.toArray(children);
  const slides = useMemo(() => {
    const allSlides = [];
    let current;
    childrenArr.forEach((e) => {
      if (e.props.id === "slide") {
        if (current && current.length) {
          allSlides.push(current);
        }
        current = [];
        return;
      }

      if (current) {
        current.push(e);
      }
    });

    return allSlides;
  }, [children]);

  const currentSlide = slides[slideId];

  const goLeft = () => {
    setSlideId(Math.max(slideId - 1, 0));
  };
  const goRight = () => {
    setSlideId(Math.min(slides.length - 1, slideId + 1));
  };

  return (
    <div>
      {currentSlide}
      <div className="flex">
        <div className="equal-width center">
          <LeftButton onClick={goLeft} currentId={slideId} slides={slides} />
        </div>
        <div className="equal-width center">
          <RightButton onClick={goRight} currentId={slideId} slides={slides} />
        </div>
      </div>
    </div>
  );
}

export const slideShow = {
  render: "SlideShow",
};
