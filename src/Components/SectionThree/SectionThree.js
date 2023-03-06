import React from 'react'
import { Link } from 'react-router-dom'
import './SectionThree.scss'
import 'animate.css'
import qr from '../../assets/qr.png'
import transfer from '../../assets/transfer.png'
import Applink from '../AppLinks/Applink'
import { Fade, Slide } from 'react-awesome-reveal'

const SectionThree = () => {
  return (
    <section className='sectionThree'>
        <Fade delay={500}>
            <Slide direction='left' delay={200}>
                <div className="image">
                    <img src={qr} alt="" />
                    <img src={transfer} alt="" id='two'/>
                </div>
            </Slide>
        </Fade>

        <aside>
            <Fade delay={500}>
                <Slide damping={0.2} delay={200} direction='right'>
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

                    <Applink />

                    <br />
                    <br />

                    <Link to='/' className='next'> Learn More <i class="fa-solid fa-arrow-right"></i></Link>
                </Slide>
            </Fade>
        </aside>
        
    </section>
  )
}

export default SectionThree