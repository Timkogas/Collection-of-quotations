import './EditQuoteForm.css'
import Categories from '../../Categories';

function EditQuoteForm(props) {
  return (
    <>
      <form className='edit_block' onSubmit={props.AddQuote}>
        <h1>Edit quote</h1>

        <select onChange={props.selectChange} name='select' value={props.selectValue}>
          {Categories.map((category)=>{
            return (
              <option value={category.id}>{category.title}</option>
            )
          })}
        </select>

        <div>
          <p>Author</p>
          <input onChange={props.inputChange} name='input' value={props.inputValue}></input>
        </div>

        <div>
          <p>Quote text</p>
          <textarea onChange={props.textAreaChange} name='textArea' value={props.textAreaValue}></textarea>
        </div>


        {props.inputValue && props.textAreaValue ? <button>Add</button> : null}
      </form>
    </>
  );
}

export default EditQuoteForm;
