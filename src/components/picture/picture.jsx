import React from 'react'
import Github from './github.png'
import Slack from './slack.png'
import './picture.css'

const Logo = () => {
  return (
<div className="logo">
    <img src={Slack} alt='slack.png' id='slack-img'/>
    <img src={Github} alt= 'github.png' id='github' />
</div>
    )
}

export default Logo