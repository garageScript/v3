import React, { useState, useMemo } from "react";

const LeftButton = ({ onClick, currentId, slides }) => {
  if (currentId <= 0) {
    return <div></div>;
  }
  return <div onClick={onClick}>Previous</div>;
};

const RightButton = ({ onClick, currentId, slides }) => {
  if (currentId >= slides.length - 1) {
    return <div></div>;
  }
  return <div onClick={onClick}>Next</div>;
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

    if (current && current.length) {
      allSlides.push(current);
    }

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
    <div className="shadow-xl p-2">
      {currentSlide}
      <div className="divider divider-vertical"></div>
      <div className="flex w-full">
        <div className="w-full text-center">
          <LeftButton onClick={goLeft} currentId={slideId} slides={slides} />
        </div>
        <div className="divider divider-horizontal"></div>
        <div className="w-full text-center">
          <RightButton onClick={goRight} currentId={slideId} slides={slides} />
        </div>
      </div>
    </div>
  );
}

export const slideShow = {
  render: "SlideShow",
};

/* Example

{% slideShow %}

# slide
{% sideBySide %}

{% mermaid %}
graph LR
A[Your Computer] -->|1. Prepares and sends a request| B(Modem)
{% /mermaid %}

---

The protocol is `http` and the browser prepares a request to be sent out.
As part of the http protocol, the request will contain 2 fields:
1. Destination: Where the request is going to, which is my ip address: **{% $myIp %}:{% $externalPort %}**
2. Source: Where the request is coming from, which is your ip address:  **{% $reqIp %}**
{% /sideBySide %}

# slide

# Hello world 

slide 2

# slide


```js
// js code block 
// slide 3
```

{% /slideShow %}

*/
