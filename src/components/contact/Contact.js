import React from 'react'
import "./Contact.css"
import msgIcon from "../../assets/msg-icon.png";
import mailIcon from "../../assets/mail-icon.png";
import phoneIcon from "../../assets/phone-icon.png";
import locationIcon from "../../assets/location-icon.png";
import arrow from "../../assets/white-arrow.png"

const Contact = () => {
    const [result, setResult] = React.useState("");

    const onSubmit = async (event) => {
        event.preventDefault();
        setResult("Sending....");
        const formData = new FormData(event.target);
        formData.append("access_key", "d83d8fa0-33be-4bbc-8f35-6aca855e5cb4");
        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
        });
        const data = await response.json();

        if (data.success) {
            setResult("Form Submitted Successfully");
            event.target.reset();
            setTimeout(() => {
                setResult("");
            },2000)
        } else {
            console.log("Error", data);
            setResult(data.message);
        }
    };

    return (
        <div className='contact'>
            <div className="contact-left">
                <h3>Send us a message <img src={msgIcon} alt="" /></h3>
                <p>Feel free to reach out through contact form or find our contact information below. Your feedback, questions, and suggestions are important to us as we strive to provide exceptional service to our university community.</p>
                <ul>
                    <li><img src={mailIcon} alt="" />prabhattiwari9629@gmail.com</li>
                    <li><img src={phoneIcon} alt="" />+1 123-456-7890</li>
                    <li><img src={locationIcon} alt="" />Satna<br />MadhyaPradesh,India</li></ul>
            </div>
            <div className="contact-right" >
                <form autoComplete='off' onSubmit={onSubmit}>
                    <label htmlFor="name">Your name</label>
                    <input type="text" name="name" id="name" placeholder='Enter your name' required />
                    <label htmlFor="phone">Phone Number</label>
                    <input type="text" name="phone" id="phone" placeholder='Enter your phone number' required maxLength={10} />
                    <label htmlFor="email">Your Email</label>
                    <input type="email" name="email" id="email" placeholder='Enter your email' required />
                    <label htmlFor="message">Write your messages here</label>
                    <textarea name="message" id="message" rows="6" placeholder='Enter your message' />
                    <button className="btn dark-btn" type='submit'>Submit Now<img src={arrow} alt="" /></button>
                </form>
                {result && (
                    <span className='msg'>{result}</span>
                )}
            </div>
        </div>
    )
}

export default Contact