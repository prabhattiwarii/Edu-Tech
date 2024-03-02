import React, { useRef } from 'react'
import "./Testimonial.css"
import next_icon from "../../assets/next-icon.png"
import back_icon from "../../assets/back-icon.png"
import user_1 from "../../assets/user-1.png"
import user_2 from "../../assets/user-2.png"
import user_3 from "../../assets/user-3.png"
import user_4 from "../../assets/user-4.png"

const Testimonial = () => {
    const slider = useRef();
    let tx = 0;

    const slidePrev = () => {
        if(tx < 0){
            tx += 25;
        }
        slider.current.style.transform = `translateX(${tx}%)`
    }
    const slideNext = () => {
        if(tx > -50){
            tx -= 25;
        }
        slider.current.style.transform = `translateX(${tx}%)`
    }
    const slideData = [
        {id:1,profile:user_1,name:"Emily Williams",location:"Edusity, USA",review:"Choosing to pursue my degree at Edusity was one of the best decisions I've ever made. The supportive community, state-of-the-art facilities, and commitment to academic excellence have truly exceeded my expectations."},
        {id:2,profile:user_2,name:"William Jackson",location:"Edusity, USA",review:"Choosing to pursue my degree at Edusity was one of the best decisions I've ever made. The supportive community, state-of-the-art facilities, and commitment to academic excellence have truly exceeded my expectations."},
        {id:3,profile:user_3,name:"Emily Williams",location:"Edusity, USA",review:"Choosing to pursue my degree at Edusity was one of the best decisions I've ever made. The supportive community, state-of-the-art facilities, and commitment to academic excellence have truly exceeded my expectations."},
        {id:4,profile:user_4,name:"William Jackson",location:"Edusity, USA",review:"Choosing to pursue my degree at Edusity was one of the best decisions I've ever made. The supportive community, state-of-the-art facilities, and commitment to academic excellence have truly exceeded my expectations."}
    ]
  return (
    <div className='testimonial'>
        <img src={next_icon} alt="" className='next-btn' onClick={slideNext}/>
        <img src={back_icon} alt="" className='back-btn' onClick={slidePrev}/>
        <div className="slider">
            <ul ref={slider}>
                {slideData.map((item) => (
                    <li key={item.id}>
                        <div className="slide">
                            <div className="user-info">
                                <img src={item.profile} alt="" />
                                <div>
                                    <h3>{item.name}</h3>
                                    <span>{item.location}</span>
                                </div>
                            </div>
                            <p>{item.review}</p>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    </div>
  )
}

export default Testimonial