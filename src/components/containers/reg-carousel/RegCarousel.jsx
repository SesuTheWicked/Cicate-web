import React from 'react'

import greenshield from '../../../assets/greenshield.svg'
import pic1 from  '../../../assets/1.svg'
import pic2 from  '../../../assets/2.svg'
import pic3 from  '../../../assets/3.svg'
import pic4 from  '../../../assets/4.svg'
import normal from  '../../../assets/normal.svg'
import greenArrow from '../../../assets/green_arrows.svg'

import { useRegisterContext } from '../../../auth/Register'
import './style.css'

const RegCarousel = ({handleClick}) => {

const {activeState} = useRegisterContext()

  return (
    <div>
        <div className='flex_green_sign'>
          <img src={greenshield} alt="img" className='green_body'/>
          <div className='signup_white'>Sign Up</div>
        </div>

        <div className='flex_end'>
          <div className='inside_flex'>
            <img src={pic1} alt="img" className='pic1'/>
           <p className='personal_information'>
            <span className='personal'>Personal </span> <br />
          <span className='information'>Information </span>
          <div className={activeState ? "current-position" :"non-current-position" } />
          </p>
          <div className='green_arrow_box'> <img src={greenArrow} alt='img' className='next' /></div>
          </div>
             
          <div className='inside_flex'>
            <img src={pic2} alt="img" className='pic1'/>
           <p className='personal_information'>
            <span className='personal_unselected'>Additional </span> <br />
           <span className='information_unselected'>Information </span>
           <div className={activeState ? "current-position" :"non-current-position" } />
          </p>
          <div className='green_arrow_box'> <img src={normal} alt='img' className='next' /></div>
          </div>

           <div className='inside_flex'>
          <img src={pic3} alt="img" className='pic1'/>
           <p className='personal_information'>
          <span className='personal_unselected'>Username  </span> <br />
          <span className='information_unselected'> Password </span>
          <div className={activeState ? "current-position" :"non-current-position" } />
          </p>
          <div className='green_arrow_box'> <img src={normal} alt='img' className='next' /></div>
          </div>

          <div className='inside_flex'>
            <img src={pic4} alt="img" className='pic1'/> 
          <span className='personal_unselected'>Done!</span> 
          </div>
          
        </div>
        
    </div>
  )
}

export default RegCarousel
