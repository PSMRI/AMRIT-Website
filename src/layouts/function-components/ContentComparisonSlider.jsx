import React from 'react';
import ReactBeforeSliderComponent from 'react-before-after-slider-component';
import 'react-before-after-slider-component/dist/build.css';

const FIRST_IMAGE = {
  imageUrl: '/images/problem-statement.svg'
};
const SECOND_IMAGE = {
  imageUrl: '/images/our-approach.svg'
};
/* ... */
const ContentComparisonSlider = () => {
  return(
    <ReactBeforeSliderComponent
      className={"!h-[540px] !w-[960px]"}
      firstImage={SECOND_IMAGE}
      secondImage={FIRST_IMAGE}
      feelsOnlyTheDelimiter={true}
      delimiterColor={"#FF7847"}
    />
  )
}
/* ... */
export default ContentComparisonSlider;
