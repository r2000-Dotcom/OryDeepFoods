import React from 'react';
import './Footer.css';
import youtubeImage from '../../assets/youtube.png'; // Importing the image
import facebookImage from '../../assets/facebook.png'

const Footer = () => {
  return (
    <div className='footer'>
      <p>© 2016 OryDeepFoods. All rights reserved.</p>
      <ul>
        <li>
          <a href="https://youtube.com/@orydeepfoodsorydeepfoods9637?si=ECAG4Rtjv23m0HT_" target='_blank'>
            <img src={youtubeImage} alt='YouTube' style={{ width: '25px', height: '22px' }}></img>
          </a>
        </li>
        <li><a href="https://www.facebook.com/people/Ory-Deep-Foods/pfbid02kB6Nf9PpA4MWUt4yEcV75NDfKNQB5kKi7WzfTgLxh3jro9Qhn9uzqRzgQSb6Ec2Xl/" target='_blank'><img src={facebookImage} alt='facebook' style={{ width: '25px', height: '22px' }}></img></a></li>
      </ul>
    </div>
  );
};

export default Footer;
