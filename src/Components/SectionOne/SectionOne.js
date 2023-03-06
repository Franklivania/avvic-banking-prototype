import React from 'react'
import './SectionOne.scss'
import iphone from '../../assets/iphone.png'

const SectionOne = () => {
  return (
    <section className='sectionOne'>
        <img src={iphone} alt="" />
        
        <aside>
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
        </aside>
    </section>
  )
}

export default SectionOne