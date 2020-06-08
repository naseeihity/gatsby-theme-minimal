import React from "react";
import ImageZoom from "react-medium-image-zoom";
const Image = ({ img, alt = "" }) => (
  <ImageZoom
    zoomMargin={60}
    image={{
      src: `${img}?imageView2/4/w/600/h/400/q/75|imageslim`,
      alt,
    }}
    zoomImage={{
      src: img,
      alt,
    }}
  />
);

export default Image;
