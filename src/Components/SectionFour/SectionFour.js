import React from 'react'
import { Link } from 'react-router-dom'
import './SectionFour.scss'
import relaxed from '../../assets/relaxed.png'
import dash from '../../assets/dash.png'
import playStore from '../../assets/playStore.svg'
import appleStore from '../../assets/appleStore.svg'
import Applink from '../AppLinks/Applink'

const SectionFour = () => {
  return (
    <section className='sectionFour'>
        <aside>
            <h2>
                Its not just banking,
                Its a way of life
            </h2>
                <br />
                <br />
            <p>
                Join us now and get started.
                Faster, easier and secure transactions
                at your finger tips.
            </p>
                <br />
                <br />
            <small>YOU'VE NEVER HAD IT THIS GOOD!</small>
                <br />
                <br />

                <Applink />

                <br />
                <br />

                <Link to='/' className='next'> Learn More <i class="fa-solid fa-arrow-right"></i></Link>

        </aside>

        <img src={relaxed} alt="" id='relax'/>

        <img src={dash} alt="" id='dash'/>
    </section>
  )
}

export default SectionFour