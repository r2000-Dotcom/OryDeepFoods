import React from 'react'
import './About.css'
import about_img from '../../assets/Soyabeanthumnail.jpg'
import play_icon from '../../assets/play-icon.png'

const About = ({setPlayState}) => {
  return (
    <div className='about'>
      <div className="about-left">
        <img src={about_img} alt="" className='about-img'/>
        <img src={play_icon} alt="" className='play-icon' onClick={()=>{setPlayState(true)}}/>
      </div>
      <div className="about-right">
        <h3>About Ory Deep Foods</h3>
        <h2>Aroma of Real Test</h2>
        <p>Welcome to Ory Deep Foods, where innovation meets nutrition! Founded in 2016 by the visionary entrepreneur Ramesh bhagwati kumar, we take pride in revolutionizing the culinary landscape with our premium range of soya chunks.</p>
        <p>At Ory Deep Foods, we are more than just manufacturers; we are pioneers in crafting high-quality, nutritious, and delicious soya chunks,papad,pickle,souse,hing that cater to the diverse palates across numerous states. With a commitment to excellence and a passion for health-conscious living, we have established ourselves as leaders in the industry.</p>
        <p>Our journey is driven by a simple yet powerful mission – to provide wholesome and sustainable food solutions that enrich lives and promote well-being. Each batch of our soya chunks undergoes rigorous quality control measures, ensuring that every bite delivers unparalleled taste and nourishment.</p>
        <p>As we continue to expand our footprint across the nation, we remain committed to our core values of integrity, authenticity, and social responsibility. From farm to fork, we uphold the highest standards of sustainability and ethical sourcing, leaving a positive impact on both our consumers and the environment.</p>
        <p>Join us on this flavorful journey and experience the goodness of Ory Deep Foods – where every bite tells a story of quality, innovation, and wholesome goodness.</p>
      
      
      </div>
    </div>
  )
}

export default About
