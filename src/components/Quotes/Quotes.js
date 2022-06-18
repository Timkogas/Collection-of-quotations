import './Quotes.css'
import Quote from './Quote/Quote';
import QuotesCategories from './QuotesCategories/QuotesCategories';
import QuotesWrapper from './QuotesWrapper/QuotesWrapper';
import Categories from '../../Categories';

function Quotes() {
  return (
    <div className='Qoutes'>
      <QuotesCategories/>
      <QuotesWrapper>
        <Quote/>
        <Quote/>
        <Quote/>
        <Quote/>
      </QuotesWrapper>
    </div>
  );
}

export default Quotes;
