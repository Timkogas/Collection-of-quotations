import './AddQuoteForm.css'
import Categories from '../../Categories';

function AddQuoteForm(props) {
  return (
    <>
      <form className='add_block' onSubmit={props.AddQuote}>
        <h1>Add quote</h1>

        <select onChange={props.selectChangeHandler} name='select' value={props.selectValue}>
          <option>--choose--</option>
          {Categories.map((category, i)=>{
            return (
              <option key={i} value={category.id}>{category.title}</option>
            )
          })}
        </select>

        <div>
          <p>Author</p>
          <input onChange={props.inputChangeHandler} name='input' value={props.inputValue}></input>
        </div>

        <div>
          <p>Quote text</p>
          <textarea onChange={props.textAreaChangeHandler} name='textArea' value={props.textAreaValue}></textarea>
        </div>


        {props.inputValue && props.textAreaValue && props.selectValue && (props.selectValue !== '--choose--') 
        ? <button>Add</button> : null}
      </form>
    </>
  );
}

export default AddQuoteForm;
