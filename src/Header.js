import React from 'react'
import './Header.css'
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import { Link } from 'react-router-dom'
import { useStateValue } from './StateProvider'
import { auth } from './firebase'
function Header(){

    const [{basket, user}, dispatch] = useStateValue();
    const handleAuthentication= () =>{
      if(user) {
       auth.signOut();
      }
    }
    return(
        <div className='header'>
            <Link to = '/'>
            <img className='header__logo'
         src="https://www.sahirkarani.com/images/amazon.png" alt='' />
            </Link>
        
        <div className="header__search">
            <input 
            className='header__searchInput' type= 'text'
            />
            <SearchIcon 
            className="header__searchIcon" />
        </div>
        <div className='header__nav'>
            <Link to= {!user && '/login'}  >
         
         <div onClick={handleAuthentication} className='header__option'>
         <span className='header__optionline1'>
             Hello 
        </span>
        <span className='header__optionline2'>
         {user? 'Sign Out' : 'Sign In'}
        </span>
        </div>
        </Link>
         <div className='header__option'>
         <span className='header__optionline1'>
             Returns
        </span>
        <span className='header__optionline2'>
         & Orders
        </span>
         </div>
         <div className='header__option'>
         <span className='header__optionline1'>
             Your
        </span>
        <span className='header__optionline2'>
         Prime
        </span>
         </div>
         <div className='header__optionBasket'>
          <Link to = '/checkout'>
          <ShoppingBasketIcon/>
          <span className='header__optionLine2header__basketcount'>{basket?.length}</span> 
          </Link>
          </div>
         </div>
        </div>
    )
}
export default Header;