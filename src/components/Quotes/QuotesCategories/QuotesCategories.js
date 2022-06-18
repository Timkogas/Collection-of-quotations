import './QuotesCategories.css'
import Categories from '../../../Categories';

function QuotesCategories() {
  return (
    <>
      <ul className='QuotesCategories'>
        {Categories.map((category, i) => {
          return (
            <li className='QuotesCategory' key={i}>{category.title}</li>
          )
        })}
      </ul>
    </>
  );
}

export default QuotesCategories;
