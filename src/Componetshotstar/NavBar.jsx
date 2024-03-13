
import React from 'react'
import './Navbar.css'
import d2 from './images/d2.png'
function NavBar() {
  return (
    <>
    <div id='navbar' className='d-flex justify-content-space-around'>
     <img src={d2} className='logo1' alt="" />
    <a href="https://www.hotstar.com/in/mypage" className='navbaricon'><i style={{color:'white'}} class="fa-regular fa-user"></i>My Space</a> 
    <a href=""  className='navbaricon'> <i style={{color:'white'}}  class="fa-solid fa-magnifying-glass"></i>Search</a>
    <a href="https://www.hotstar.com/in/home"  className='navbaricon'><i style={{color:'white'}} class="fa-solid  fa-house"></i>Home</a>
    <a href="https://www.hotstar.com/in/shows"  className='navbaricon'><i style={{color:'white'}} class="fa-solid fa-tv"></i>TV</a>
    <a href="https://www.hotstar.com/in/sports"  className='navbaricon'><i style={{color:'white'}} class="fa-solid fa-baseball"></i>Sports</a>
    <a href="https://www.hotstar.com/in/categories"  className='navbaricon'><i style={{color:'white'}} class="fa-solid fa-layer-group"></i> Categories</a>
    </div>
    
    </>
  )
}

export default NavBar