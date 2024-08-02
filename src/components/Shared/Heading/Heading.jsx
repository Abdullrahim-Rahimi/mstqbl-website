/* eslint-disable react/prop-types */

import { useTranslation } from 'react-i18next';
import './Heading.css';


const arFont={
    fontFamily: 'Cairo'
}

const arH2 = {
    fontFamily: 'Cairo',
    fontWeight: '700'
}

const arTextHeading = {
    fontFamily: 'Cairo',
    fontWeight: '700',
    textAlign: 'right'
}

export const H5 = ({text, centered}) => {
    

    const {i18n} = useTranslation()
  return (
    <h5 className= {`heading-five ${centered ? 'centered' : ''}`} style={i18n.language === 'ar' ? arFont : {}} >{text}</h5>
  )
}


export const H2 = ({text, centered, download}) => {
    const {i18n} = useTranslation()
    return (
        <h2 className={`heading-two ${centered ? 'centered' : ''} ${download ? 'download' : ''}`}  style={i18n.language === 'ar' ? arH2 : {}}>{text}</h2>
    )
}

export const HeadingText = ({text, centered}) => {
    const {i18n} = useTranslation()
    return (
        <p className={`heading-text ${centered ? 'centered' : ''}`} style={i18n.language === 'ar' ? arFont : {}}>{text}</p>
    )
}


export const Text = ({text, centered}) => {
    const {i18n} = useTranslation()
    return (
        <p className={`text ${centered ? 'centered' : ''}`} style={i18n.language === 'ar' ? arFont : {}}>{text}</p>
    )
}


export const TextHeading = ({text, centered}) => {
    const {i18n} = useTranslation()
    return (
        <h4 className={`text-heading ${centered ? 'centered' : ''}`} style={i18n.language === 'ar' ? arTextHeading  : {}}>{text}</h4>
    )
}


export const WhyTextHeading = ({text, centered}) => {
    const {i18n} = useTranslation()
    return (
        <h4 className={`whytext-heading ${centered ? 'centered' : ''}`} style={i18n.language === 'ar' ? arTextHeading  : {}}>{text}</h4>
    )
}


export const PriceText= ({text, centered}) => {
    const {i18n} = useTranslation()
    return (
        <h4 className={`pricetext ${centered ? 'centered' : ''}`} style={i18n.language === 'ar' ? arTextHeading  : {}}>{text}</h4>
    )
}



