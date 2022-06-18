import './Quote.css'

function Quote(props) {
  return (
    <div className='Quote'>
      <div className='Quote_content'>
        "{props.text}"
        <div className='Quote_btns'>
          <button onClick={props.editQuote} >Edit</button>
          <button onClick={props.deleteQuote} >Delete</button>
        </div>

      </div>
      <p className='Quote_author'>&#8212; {props.author}</p>
    </div>
  );
}

export default Quote