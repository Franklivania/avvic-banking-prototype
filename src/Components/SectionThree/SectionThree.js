import React from 'react'
import { Link } from 'react-router-dom'
import './SectionThree.scss'
import qr from '../../assets/qr.png'
import transfer from '../../assets/transfer.png'
import playStore from '../../assets/playStore.svg'
import appleStore from '../../assets/appleStore.svg'

const SectionThree = () => {
  return (
    <section className='sectionThree'>

        <div className="image">
            <img src={qr} alt="" />
            <img src={transfer} alt="" id='two'/>
        </div>

        <aside>
            <small>FAST AND SECURE TRANSACTIONS</small>

            <br />
            <br />

            <h2>
                Get faster transactions, when you
                sign up with us.
            </h2>

            <br />

            <p>
                With us, you have a faster guaranteed
                transfer process. Near lightspeed transactions
                whenever you want
            </p>

            <br />
            <br />

            <div className="download">
                <a href=""><img src={playStore} alt="" /></a>
                <a href=""><img src={appleStore} alt="" /></a>
            </div>

            <br />
            <br />

            <Link to='/' className='next'> Learn More <i class="fa-solid fa-arrow-right"></i></Link>
        </aside>
        
    </section>
  )
}

export default SectionThree