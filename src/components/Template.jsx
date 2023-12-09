import React from 'react'
import image from "../Assets/register.png"
import '../Styles/Template.css'

const Template = () => {
  return (
    <div className='templateContainer'>
      <div className='tempmain'>
        <p className='tempHeading'>Your Personal Job Finder</p>
        <img 
          src={image} 
          alt="logo" 
          className='TempLogo'
        />
      </div>
    </div>
  )
}

export default Template