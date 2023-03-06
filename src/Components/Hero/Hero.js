import React from 'react'
import './Hero.scss'
import polka from '../../assets/white-polka-dot.png'
import CardOne from '../Cards/CardOne/CardOne'

const Hero = () => {
  return (
    <main>

        <div className="polka">
            <img src={polka} alt=""  className='one'/>
            <img src={polka} alt=""  className='two'/>
            <img src={polka} alt="" className='three'/>
        </div>

        <section>

            <aside>

                <h1>
                    Revolutionaise <span>Banking</span> <br />
                    for yourself
                </h1>

                <p>
                    A customer-focused digital banking service that <br />
                    piortises customer satifaction with the aid of <br />
                    financial solutions to meet your banking needs.
                </p>
            </aside>

            <CardOne  className='card'/>
        </section>

    </main>
  )
}

export default Hero