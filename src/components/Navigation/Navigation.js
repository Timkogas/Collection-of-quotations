import './Navigation.css';
import { NavLink, Link } from 'react-router-dom'

function Navigation() {
  return (
    <header className='header'>
      <div className='header_logo'>
        
        <Link to='/' className='header_logo_link'>Quotes Central</Link>
      </div>

      <div  className='header_menu'>
        <NavLink to='/' className='header_link'>Quotes</NavLink>
        <NavLink to='/add-quote' className='header_link'>Sumbit new quote</NavLink>
      </div>
      
    </header>
  );
}

export default Navigation;
