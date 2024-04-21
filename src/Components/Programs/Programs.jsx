import React from 'react'
import './Programs.css'
import program_1 from '../../assets/Soyabada.jpg'
import program_2 from '../../assets/Soyachota.jpg'
import program_3 from '../../assets/Achar.jpeg'
import program_4 from '../../assets/SoyaBox.jpeg'
import program_icon_1 from '../../assets/Icon.png'
import program_icon_2 from '../../assets/Icon.png'
import program_icon_3 from '../../assets/Icon.png'

const Programs = () => {
  return (
    <div className='programs'>
      <div className="program">
        <img src={program_1} alt="" />
        <div className="caption">
            <img src={program_icon_1} alt="" />
            <p>Nutrik Soya Chunks</p>
        </div>
      </div>
      <div className="program">
        <img src={program_2} alt="" />
        <div className="caption">
            <img src={program_icon_2} alt="" />
            <p>Nutrik soya mini chunks</p>
        </div>
      </div>
      <div className="program">
        <img src={program_3} alt="" />
        <div className="caption">
            <img src={program_icon_3} alt="" />
            <p>Ory Deep Pickle</p>
        </div>
      </div>
      {/* <div className="program">
        <img src={program_4} alt="" />
        <div className="caption">
            <img src={program_icon_3} alt="" />
            <p>Post Graduation</p>
        </div>
      </div> */}
    </div>
    
  )
}

export default Programs
