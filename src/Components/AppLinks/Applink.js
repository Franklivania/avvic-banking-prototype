import React from 'react'
import './Applink.scss'
import playStore from '../../assets/playStore.svg'
import appleStore from '../../assets/appleStore.svg'

const Applink = () => {
  return (
    <div className='download'>
        <a href=""><img src={playStore} alt="" /></a>
        <a href=""><img src={appleStore} alt="" /></a>
    </div>
  )
}

export default Applink