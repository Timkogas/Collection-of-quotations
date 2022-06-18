import './QuotesCategories.css'
import Categories from '../../../Categories';
import {NavLink} from 'react-router-dom'

function QuotesCategories(props) {
  return (
    <>
      <ul className='QuotesCategories'>
        {Categories.map((category, i) => {
          return (
            <li 
              className='QuotesCategory' 
              key={i}
            ><NavLink to={'/quotes/'+ category.id}>{category.title}</NavLink></li>
          )
        })}
      </ul>
    </>
  );
}

export default QuotesCategories;
