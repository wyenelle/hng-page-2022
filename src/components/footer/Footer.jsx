import React from 'react'
import './Footer.css'
import i4g from './i4g.png'
const Footer = () => {
  return (
    <div className='footer'>
       <div className="first">
       <h2>Zuri<span style={{color:'red'}}>.</span>Internship</h2>

<p>HNG Internship 9 Frontend Task</p>

       </div>

        <div className="second">
        <img src={i4g} alt='ingressive$good'  id='i4g'/>
        <div className="ing">
            <h3><b>INGRESSIVE FOR GOOD</b></h3>
        </div>
        <h2></h2>
        </div>
    </div>
  )
}

export default Footer