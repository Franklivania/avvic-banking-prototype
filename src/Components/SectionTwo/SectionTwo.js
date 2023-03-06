import React from 'react'
import { Link } from 'react-router-dom'
import './SectionTwo.scss'
import card from '../../assets/card.png'
import Applink from '../AppLinks/Applink'
import { Fade, Slide } from 'react-awesome-reveal'


const SectionTwo = () => {
  return (
    <section className='sectionTwo'>
        <aside>
            <Fade delay={500} damping={0.2}>
                <Slide direction='left'>

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
                </Slide>
            </Fade>
        </aside>
        <Fade delay={300}>
            <Slide direction='right'>
                <img src={card} alt="" />
            </Slide>
        </Fade>
    </section>
  )
}

export default SectionTwo