//Ssimport react from 'react' ;
import {Link} from 'react-router-dom'

import './index.css'

const Header = () => {
  
  return(
    <nav className='navbar'>
      <div className= "logo-container">
        <h4>Sushilkant Wakekar</h4>
      </div>
      <div className='nav-menu-container'>
        
        <ul className='nav-items'>
          <li className='nav-menu'>
            <Link to= '/' className="nav-link">About</Link>
          </li>

          <li className='nav-menu'>
            <Link to= '/projects' className="nav-link">Projects</Link>
          </li>

          <li className='nav-menu'>
            <Link to= '/contacts' className="nav-link">Contacts</Link>
          </li>
        </ul>
        
      </div>
      
    </nav>
  
  )
    
}

export default Header
