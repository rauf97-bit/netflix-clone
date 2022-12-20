import {InfoOutlined, PlayArrow } from '@material-ui/icons'
import React from 'react'
import img from '../../assets/images/bcg2.png'
import img1 from "../../assets/images/logo.jpg";
import './hero.scss'
function Hero({type}) {
  return (
    <div className='hero'>
      <img src={img} className="hero_img" alt="bcg" />
      { type && 
        <div className="category">
          <p>{type}:</p>
          <select name="genre" id="genre">
            <option>Genre</option>
            <option value="drama">Drama</option>
            <option value="fiction">Fiction</option>
            <option value="action">Action</option>
            <option value="sci-fi">Sci-fi</option>
            <option value="anime">Anime</option>
            <option value="horror">Horror</option>
            <option value="crime">Crime</option>
            <option value="fantasy">Fantasy</option>
            <option value="thriller">Thriller</option>
          </select>
        </div>
       }
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