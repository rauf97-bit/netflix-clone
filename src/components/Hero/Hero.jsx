import { Info, InfoOutlined, PlayArrow } from '@material-ui/icons'
import React from 'react'
import img from '../../assets/images/bcg2.png'
import img1 from '../../assets/images/img1.jpg'
import './hero.scss'
function Hero() {
  return (
    <div className='hero'>
      <img src={img} className="hero_img" alt="bcg" />
      <div className="features">
        <img src={img1} className="features_img" alt="" />
        <div className="features_text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis eius expedita, quia assumenda voluptas atque consequuntur quibusdam delectus porro optio numquam labore facere fuga aliquam ducimus laudantium repellat molestias. Provident, quibusdam doloremque cupiditate vero quam consequatur excepturi eligendi aperiam ad?
        </div>
        <div className="buttons">
          <button className="play">
            <PlayArrow />
            <span>Play</span>
          </button>
          <button className="play more">
            <InfoOutlined />
            <span>More</span>
          </button>
        </div>
      </div>
    </div>
  )
}

export default Hero