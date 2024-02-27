import React, { useEffect, useState } from 'react'
import './Navbar.css'
function NavBar() {

  const[show,setShow] = useState(false)
  /* side effect */
  useEffect(()=>{
    window.addEventListener("scroll",()=>{   /* 1st arg should the event and sec arg should be function to execute  */
      if (window.scrollY>=600) {
        setShow(true)
      }
      else{
        setShow(false)
      }
    })
    /* dependecy is null */
  })
  
  return (
    <div className={`${show && 'nav-black'} nav `} >
       <img className='navlogo' src="https://farm6.staticflickr.com/5821/20639706793_8c038faa4a_o.png" alt="" />
    </div>
  )
}

export default NavBar