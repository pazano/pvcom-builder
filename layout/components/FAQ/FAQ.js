import './FAQ.module.scss';

const FAQBlock = ({ image, alignment, border, children }) => {
  const imageStyle = {
    backgroundImage: `url('${image}')`
  }
  return(
    <div className={`faq__block ${alignment === 'left' ? 'faq__align-left' : 'faq__align-right'} ${border ? 'faq__block-border' : ''}`}>
      <div className="faq__image" style={imageStyle}></div>
      <div className="faq__content">
        { children }
      </div>
    </div>
  )
}

const FAQItem = ({ question, children }) => (
  <div className={`faq__item`}>
    <h3>{ question }</h3>
    <div className='faq__item-answer'>{children}</div>
  </div>
);

export {
  FAQBlock,
  FAQItem
}