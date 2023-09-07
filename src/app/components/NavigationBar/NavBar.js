"use client";

import React from 'react';
import './NavBar.css';
import { 
  AiFillYoutube, 
  AiOutlineHeart, 
  AiOutlineInstagram, 
  AiOutlineShoppingCart, 
  AiOutlineTwitter, 
  AiOutlineUserAdd, 
  AiOutlineWifi,
  AiOutlineUser
 } from 'react-icons/ai';
import { BiLogoFacebook } from 'react-icons/bi'
import { BsBookmark, BsFillCartFill, BsPinterest } from 'react-icons/bs';
import { LiaSearchSolid } from 'react-icons/lia';
import { CartState } from '../../app/Context/Context';
// import { useNavigate } from 'react-router-dom';

const Nav = ({ query, handleInputChange }) => {
  const { state : { cart, favourite }, dispatch } = CartState();
//   const navigate = useNavigate();
  console.log(cart, favourite, 'cart');
  return (
    <div className='nav-ctr'>
      <div className='nav-head'>
        <div 
          className='logo-ctr' 
          // onClick={() => navigate('/')}
        >
          EASYMEALS
        </div>
        <div className='nav-container'>
          <input 
            type='text'
            className='search-input'
            placeholder='Search Recipies...'
            value={query}
            onChange={(e) => handleInputChange(e)}
          />
          <div className='search-icon'><LiaSearchSolid style={{ height: '100%' }} /></div>
        </div>
        <div 
          className='favourite-container' 
          // onClick={() => navigate('/cart')}
        >
          <a className='cart-ctr'>
            <BsBookmark className='nav-icons'/>
            {
              favourite.length > 0 ? (
                <div className='qty'><span>{favourite.length}</span></div>
              ) : ''
            }
            <span style={{ marginLeft: '8px' }}>Favourites</span>
          </a>
        </div>
        <div 
          className='cart-container' 
          // onClick={() => navigate('/cart')}
        >
          <a className='cart-ctr'>
            <BsFillCartFill className='nav-icons'/>
            {
              cart.length > 0 ? (
                <div className='qty'><span>{cart.length}</span></div>
              ) : ''
            }
            <span style={{ marginLeft: '8px' }}>Cart</span>
          </a>
        </div>

        <div 
          className='profile-container' 
          // onClick={() => navigate('/profile')}
        >
          <a className='profile-ctr'>
            <AiOutlineUser className='nav-icons'/>
            {/* <span style={{ marginLeft: '8px' }}>Profile</span> */}
          </a>
        </div>
      </div>
      <div className='nav-foot'>
            <div className='home' style={{ cursor: 'pointer' }}>HOME</div>
            <div className='categories'  style={{ cursor: 'pointer' }}>CATEGORIES</div>
            <div className='recipies' style={{ cursor: 'pointer' }}>RECIPIES</div>
            <div className='contact' style={{ cursor: 'pointer' }}>CONTACT</div>
            <div className='about' style={{ cursor: 'pointer' }}>ABOUT</div>
            <div className='social-icon-ctr'>
              <AiOutlineInstagram style={{ padding: '5px', cursor: 'pointer' }} />
              <AiOutlineTwitter style={{ padding: '5px', cursor: 'pointer' }} />
              <BiLogoFacebook style={{ padding: '5px', cursor: 'pointer' }} />
              <BsPinterest style={{ padding: '5px', cursor: 'pointer' }} />
              <AiOutlineWifi style={{ padding: '5px', cursor: 'pointer' }} />
              <AiFillYoutube style={{ padding: '5px', cursor: 'pointer' }} />
            </div>
      </div>
    </div>
  );
}

export default Nav;
