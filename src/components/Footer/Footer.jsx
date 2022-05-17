import React from 'react'
import fonts from '../fonts/fonts.css'
function Footer() {
  return (
    <div className='row justify-content-around bg-dark fixed-bottom'>
        <div>
            <ul className='d-flex m-0'>
                <li className='px-3 pt-3'><img src='../src/components/imgs/wpp.png'className='img-fluid'></img></li>
                <li className='px-3 pt-3'><img src='../src/components/imgs/ig.png'className='img-fluid'></img></li>
                <li className='px-3 pt-3'><img src='../src/components/imgs/fb.png'className='img-fluid'></img></li>
            </ul>
        </div>
        <div className='mainfont text-light'>Adamas Shop 2022 @</div>
        <div></div>
    </div>
  )
}

export default Footer