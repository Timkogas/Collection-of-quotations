import './Quote.css'

function Quote() {
  return (
    <div className='Quote'>
      <div className='Quote_content'>
        "loremloremloremloremloremloremloremloremloremloremlorem loremloremloremloremloremloremlorem loremloremloremloremloremlorem loremloremloremloremloremlorem loremloremloremlorem"
        <div className='Quote_btns'>
          <button>Edit</button>
          <button>Delete</button>
        </div>

      </div>
      <p className='Quote_author'>&#8212; author</p>
    </div>
  );
}

export default Quote