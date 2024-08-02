import  { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";
import { useTranslation } from "react-i18next";
import "./FAQ.css"; 
import { H2, H5 } from "../../Shared/Heading";

const FAQ = () => {
  const { t, i18n } = useTranslation();
  const [activeIndex, setActiveIndex] = useState(null);

  const faqData = [
    {
      question: t("faq.question1"),
      answer: t("faq.answer1"),
    },
    {
      question: t("faq.question2"),
      answer: t("faq.answer2"),
    },
    {
      question: t("faq.question3"),
      answer: t("faq.answer3"),
    },
    {
      question: t("faq.question4"),
      answer: t("faq.answer4"),
    },
    {
      question: t("faq.question5"),
      answer: t("faq.answer5"),
    },
  ];

  const handleClick = (index) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  const arFont={
    fontFamily: 'Cairo',
    textAlign: 'right'
}

const questionArFont={
  fontFamily: 'Cairo',
  fontSize: '18px',
  textAlign: 'right'
}


  return (
    <div className="containers">
      <div className="faq-cont">
        <div className="faq-header">
          <H5 text={t("faq.heading")} />
          <H2 text={t("faq.text")} />
        </div>
          <div className="faq-container">
            {faqData.map((item, index) => (
              <div
                key={index}
                className={`faq-item ${activeIndex === index ? "active" : ""}`}
                onClick={() => handleClick(index)}
              >
                <div className="question" style={i18n.language === 'ar' ? questionArFont : {}}>
                  {item.question}
                  <FontAwesomeIcon
                    icon={activeIndex === index ? faChevronUp : faChevronDown}
                    className="arrow-icon"
                  />
                </div>
                {activeIndex === index && (
                  <div className="answer" style={i18n.language === 'ar' ? arFont : {}} >{item.answer}</div>
                )}
              </div>
            ))}
          </div>
       
      </div>
    </div>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export default FAQ;
