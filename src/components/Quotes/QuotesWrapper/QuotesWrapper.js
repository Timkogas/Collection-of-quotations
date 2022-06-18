import './QuotesWrapper.css'

function QuotesWrapper(props) {
  return (
    <div className='QuotesWrapper'>
      {props.children}
    </div>
  );
}

export default QuotesWrapper;