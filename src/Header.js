import React from 'react'
import './Header.css'
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Link } from 'react-router-dom';
import { useStateValue } from './StateProvider';
import { auth } from './firebase';

function Header() {

    const[{basket,user},dispatch] = useStateValue()

    const handleAuthentication = () =>{
        if(user){
            auth.signOut();
        }
    }

  return (
    <div className='header'>
        <Link to="/">
        <img className='header_logo' src='https://pngimg.com/d/amazon_PNG25.png'/>
        </Link>
        <div className='header_search' >
            <input
            className='header_searchInput'
            type='text'
            />
            <SearchIcon className='header_searchIcon'/>
        </div>    
        <div className='header_nav' >
            <Link to = {!user?"/Login":null}>
                <div className='header_option' onClick={handleAuthentication}>
                    <span className='header_optionLineOne'>Hello Guest</span>
                    <span className='header_optionLineTwo'>{user ?"Sign Out" :'Sign In'}</span>
                </div>
            </Link>
            <div className='header_option'>
            <span className='header_optionLineOne'>Return</span>
                <span className='header_optionLineTwo'>& Order</span>
            </div>
            <div className='header_option'>
            <span className='header_optionLineOne'>Your</span>
                <span className='header_optionLineTwo'>Prime</span>
            </div>

            <Link to="/checkout">
            <div className='header_optionBasket'>
                <ShoppingCartIcon className=''/>
                <span className='header_optionLineTwo header_basketCount'>
                    {basket?.length}
                </span>
            </div>
            </Link>
        </div>
    </div>
  )
}

export default Header 