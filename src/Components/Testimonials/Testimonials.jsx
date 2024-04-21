import React, { useRef } from 'react'
import './Testimonials.css'
import next_icon from '../../assets/next-icon.png'
import back_icon from '../../assets/back-icon.png'
import user_1 from '../../assets/user-1.png'
import user_2 from '../../assets/user-2.png'
import user_3 from '../../assets/user-3.png'
import user_4 from '../../assets/user-4.png'

const Testimonials = () => {

    const slider = useRef();
    let tx = 0;

const slideForward = ()=>{
    if(tx > -50){
        tx -= 25;
    }
    slider.current.style.transform = `translateX(${tx}%)`;
}
const slideBackward = ()=>{
    if(tx < 0){
        tx += 25;
    }
    slider.current.style.transform = `translateX(${tx}%)`;
}

  return (
    <div className='testimonials'>
      <img src={next_icon} alt="" className='next-btn' onClick={slideForward}/>
      <img src={back_icon} alt="" className='back-btn' onClick={slideBackward}/>
      <div className="slider">
        <ul ref={slider}>
            <li>
                <div className="slide">
                    <div className="user-info">
                        <img src={"user_1"} alt="" />
                        <div>
                            <h3>NG Enterprises</h3>
                            <span>Borivali, India</span>
                        </div>
                    </div>
                    <p>Ory Deep Foods' soya chunks have been a hit with my customers! The consistent quality and delicious taste have helped boost my sales. I love knowing that I'm offering a product that not only satisfies taste buds but also promotes a healthy lifestyle.</p>
                </div>
            </li>
            <li>
                <div className="slide">
                    <div className="user-info">
                        <img src={"user_2"} alt="" />
                        <div>
                            <h3>Mahendra Traders</h3>
                            <span>Malad, India</span>
                        </div>
                    </div>
                    <p>As a retailer, I'm always on the lookout for products that resonate with my customers. Ory Deep Foods' soya chunks have been flying off the shelves! The positive feedback I receive from satisfied customers keeps me restocking them regularly.</p>
                </div>
            </li>
            <li>
                <div className="slide">
                    <div className="user-info">
                        <img src={"user_3"} alt="" />
                        <div>
                            <h3>Tulsi Enterprises</h3>
                            <span>Maharashtra, India</span>
                        </div>
                    </div>
                    <p>Introducing Ory Deep Foods' soya chunks to my inventory was one of the best decisions I've made for my business. The demand for their product is incredible, and my customers keep coming back for more. Thank you for providing such a fantastic product!</p>
                </div>
            </li>
            <li>
                <div className="slide">
                    <div className="user-info">
                        <img src={"user_4"} alt="" />
                        <div>
                            <h3>KS Pharma</h3>
                            <span>Nasik, India</span>
                        </div>
                    </div>
                    <p>I take pride in offering high-quality products to my customers, and Ory Deep Foods' soya chunks fit the bill perfectly. The packaging is attractive, the price point is competitive, and most importantly, the product speaks for itself. It's a win-win for my business and my customers!</p>
                </div>
            </li>
            <li>
                <div className="slide">
                    <div className="user-info">
                        <img src={"user_4"} alt="" />
                        <div>
                            <h3>SR Enterprises</h3>
                            <span>Panvel, India</span>
                        </div>
                    </div>
                    <p>Ory Deep Foods' soya chunks have become a bestseller in my store! The convenience of ordering from them, coupled with the positive feedback from my customers, has made them a staple in my inventory. I highly recommend their product to fellow retailers looking to boost sales.</p>
                </div>
            </li>
            <li>
                <div className="slide">
                    <div className="user-info">
                        <img src={"user_4"} alt="" />
                        <div>
                            <h3>KC Enterprises</h3>
                            <span>Lucknow, India</span>
                        </div>
                    </div>
                    <p>I've been stocking Ory Deep Foods' soya chunks for a while now, and they never disappoint. The product consistently exceeds my customers' expectations, and I appreciate the support and reliability I receive from the Ory Deep Foods team. It's a partnership I value and trust.</p>
                </div>
            </li>
        </ul>
      </div>
    </div>
  )
}

export default Testimonials
