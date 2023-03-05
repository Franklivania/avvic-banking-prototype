import React from 'react'
import './CardOne.scss'
import dots from '../../../assets/dots.png'
import nigeria from '../../../assets/nigeria.png'
import usa from '../../../assets/usa.png'

const CardOne = () => {
  return (
    <div className='card'>
        <div className="box">
            <img src={dots} alt="" className='img'/>
            <div className="container">
                <h2>Faster <span>Transactions</span></h2>

                <div className="brick">
                    <table>
                            <tr>
                                <th><img src={nigeria} alt="" /> NGN <br />
                                    Nigerian Naira</th>
                                <th><img src={usa} alt="" /> USD <br />
                                    United States Dollar</th>
                            </tr>
                            <tr>
                                <td>1,000</td>
                                <td>2.17</td>
                            </tr>
                    </table>

                    <button type='submit'>Exchange</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default CardOne