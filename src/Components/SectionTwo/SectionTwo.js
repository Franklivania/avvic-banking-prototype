import React from 'react'
import { Link } from 'react-router-dom'
import './SectionTwo.scss'
import card from '../../assets/card.png'
import playStore from '../../assets/playStore.svg'
import appleStore from '../../assets/appleStore.svg'
import Applink from '../AppLinks/Applink'


const SectionTwo = () => {
  return (
    <section className='sectionTwo'>
        <aside>
            <small>ADD MULTIPLE CARDS</small>

            <br />
            <br />

            <h2>
                Sign up now <br />
                Have an account with us.
            </h2>

            <br />

            <p>
                So you can be able to link your multiple cards
                to one account for easier and faster transactions.
                You can choose to go physical or virtual!
            </p>

            <br />
            <br />

            <Applink />

            <br />
            <br />

            <Link to='/' className='next'> Learn More <i class="fa-solid fa-arrow-right"></i></Link>
        </aside>

        <img src={card} alt="" />
    </section>
  )
}

export default SectionTwo