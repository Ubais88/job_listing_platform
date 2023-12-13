import React from 'react'
import '../Styles/Template.css'

const Template = ({heading , img}) => {
  return (
    <div className='templateContainer'>
      <div className='tempmain'>
        <p className='tempHeading'>{heading}</p>
        <img 
          src={img} 
          alt="logo" 
          className='TempLogo'
        />
      </div>
    </div>
  )
}

export default Template