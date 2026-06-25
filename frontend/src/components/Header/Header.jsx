import React from 'react'
import './Header.css'
import {assets} from "../../assets/assets";
const Header = ({setCategory}) => {
    return (
        <div className='header'>
         
            <div className='header-contents'>
                <h2>Fresh food delivered</h2>
               <button
  onClick={() => {
    setCategory("All");
    document.getElementById('popular-dishes').scrollIntoView({
      behavior: "smooth"
    });
  }}
>
  Order now
</button>
            </div>
           

            <div className='header-image'>
              <img src={assets.chad} alt=''></img>
            </div>
        </div>
    )
}

export default Header
