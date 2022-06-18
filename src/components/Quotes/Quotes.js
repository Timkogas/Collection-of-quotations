import './Quotes.css'
import Quote from './Quote/Quote';
import QuotesCategories from './QuotesCategories/QuotesCategories';
import QuotesWrapper from './QuotesWrapper/QuotesWrapper';


function Quotes(props) {
  const quotesId = Object.keys(props.quotes)
  const quotes = Object.values(props.quotes).map((quote, i)=>{
    return {author: quote.author, text: quote.text, category: quote.category, id: quotesId[i]}
  })


  return (
    <div className='Qoutes'>
      <QuotesCategories
         chooseCategory={(e)=>{props.chooseCategory(e)}}
      />
      <QuotesWrapper>
        {quotes.length ? quotes.map((quote)=>{
          return (
            <Quote
              key={quote.id}
              text={quote.text}
              author={quote.author}
              deleteQuote={(id)=>{props.deleteQuote(quote.id)}}
              editQuote={(id)=>{props.editQuote(quote.id)}}
            />
          )
        }): <h2>No Quotes</h2>}
      </QuotesWrapper>
    </div>
  );
}

export default Quotes;
