import React from 'react'
import './SectionOne.scss'
import iphone from '../../assets/iphone.png'
import { Fade, Slide } from 'react-awesome-reveal'

const SectionOne = () => {
  return (
    <section className='sectionOne'>
        <Fade delay={500}>
            <Slide direction='left'>
                <img src={iphone} alt="" />
            </Slide>
        </Fade>
        
        <aside>
            <Fade cascade damping={0.2} delay={300}>
                <Slide direction='right' delay={500}>
                    <small>TRANSACTIONS</small>
                        <br />
                        <br />
                    <h2>
                        Manage all your transactions with one click.
                        With us you would be able to peform multiple
                        trans-bank transactions with the click of a button,
                        <br />
                        <br />

                        The future of banking at your finger tips
                    </h2>
                </Slide>
            </Fade>
        </aside>
    </section>
  )
}

export default SectionOne