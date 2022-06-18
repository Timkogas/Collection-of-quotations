import './Navigation.css';
import { NavLink } from 'react-router-dom'

function Navigation() {
  return (
    <header className='header'>
      <div className='header_logo'>
        <h2>Quotes Central</h2>
      </div>

      <div  className='header_menu'>
        <NavLink to='/' className='header_link'>Quotes</NavLink>
        <NavLink to='/add-quote' className='header_link'>Sumbit new quote</NavLink>
      </div>
      
    </header>
  );
}

export default Navigation;
