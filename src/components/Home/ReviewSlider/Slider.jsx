import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import "./Slider.css"; // Import your styles

import "./ReviewSlider.css";
import { prevArrow, nextArrow, mTahir, stars } from "../../../assets/images";

const Slider = () => {
  const { t, i18n } = useTranslation();


  // styling for arabic

  const styles = {
    marginLeft: "30px"
  }

  const rowReverse = {

    transform: "scaleX(-1)"
    
   }

  const reviews = [
    {
      id: 0,
      title: t("reviewSlider.review1.title"),
      img: mTahir,
      content: t("reviewSlider.review1.content"),
    },
    {
      id: 1,
      title: t("reviewSlider.review2.title"),
      img: mTahir,
      content: t("reviewSlider.review2.content"),
    },
    {
      id: 2,
      title: t("reviewSlider.review3.title"),
      img: mTahir,
      content: t("reviewSlider.review3.content"),
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const arFont={
    fontFamily: 'Cairo'
}

const arFonts={
  fontFamily: 'Cairo',
  textAlign: 'right'
}


  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % reviews.length);
  };

  const handlePrev = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + reviews.length) % reviews.length
    );
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % reviews.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [reviews.length]);

 


  return (
    <div className="slider-container">
      <div className="testimonial">
        <button style={i18n.language === 'ar' ? rowReverse : {}} className="slider-button" onClick={handlePrev}>
          <img
            src={prevArrow}
            alt={t("reviewSlider.previousArrow")}
            className="reviewarrow"
          />
        </button>
        <div className="review-card">
            <div className="review-details-stars">
            <div className="review-name-picture">
            <img className="r-img" src={reviews[currentIndex].img} style={i18n.language === 'ar' ? styles : {}} alt="img" />
            <div className="r-name" style={i18n.language === 'ar' ? arFont : {}}>{reviews[currentIndex].title}</div>
          </div>
          <div>
            <img src={stars} alt="stars" className="r-stars" />
          </div>

            </div>
          
          <p className="r-content" style={i18n.language === 'ar' ? arFonts : {}}>{reviews[currentIndex].content}</p>
        </div>
        <button style={i18n.language === 'ar' ? rowReverse : {}} className="slider-button" onClick={handleNext}>
          <img  src={nextArrow} alt={t("reviewSlider.nextArrow")} />
        </button>
      </div>

      <div className="dot-indicator">
        {reviews.map((_, index) => (
          <span
            key={index}
            className={index === currentIndex ? "active-dot" : "dot"}
          />
        ))}
      </div>  
    </div>
  );
};

export default Slider;
