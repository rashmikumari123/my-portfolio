import React, { useState } from 'react'
import './Contact.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import mail_icon from '../../assets/mail_icon.svg'
import location_icon from '../../assets/location_icon.svg'
import linkedin_logo from '../../assets/linkedin_logo.svg'
import validator from 'validator';


const Contact = () => {


  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    const name = formData.get("name");
    const email = formData.get("email");
    const message = formData.get("message");

    if(!name || !email || !message){
       alert(" Please fill in all fields before submitting.");
    return;
    }

    
    if (!validator.isEmail(email)) {
      alert(" Please enter a valid email address.");
      return;
    }

    if (!email.endsWith("@gmail.com")) {
      alert(" Only Gmail addresses are allowed.");
      return;
    }

    formData.append("access_key", "a610c6fe-5f36-4038-9cc6-701a301d5567");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    if (res.success) {
      console.log("Success", res);
       alert(" Message sent successfully!");
      event.target.reset();
    }
    else{
       
        alert(" Something went wrong. Please try again.");
    }
  };

  return (
    <div id = 'contact' className='contact'>
         <div className="contact-title">
            <h1>Get in touch</h1>
            <img src = {theme_pattern} alt =""/>
         </div>
         <div className="contact-section">
            <div className="contact-left">
                <h1>Let's talk</h1>
                <p>I’m currently open to internship and entry-level opportunities in web development.
                 If you have a project, collaboration, or job opportunity you'd like to discuss,
                 feel free to reach out — I'd love to connect!</p>
                <div className="contact-details">
                    <div className="contact-detail">
                      <img src={mail_icon} alt="" />
                      <p>rkri6058@gmail.com</p>
                    </div>
                    <div className="contact-detail">
                       <img src={location_icon} alt="" />
                      <p>Bangalore</p>
                    </div>
                     <div className="contact-detail" id='linkedin'>
                       <img src={linkedin_logo} alt="" />
                      <p><a href=" https://www.linkedin.com/in/rashmi-kumari-7b405b233/"   target="_blank" rel="noopener noreferrer">
                          View My LinkedIn  </a></p>
                    </div>
                </div>
            </div>
            <form onSubmit={onSubmit} className="contact-right">
              

               <label htmlFor="">Your Name</label>
                <input type="text" placeholder='Enter your name'  name ='name' required/>
                <label htmlFor="">Your Email</label>
                <input type="text"  placeholder='Enter your email' name ='email' required/>
                <label htmlFor="">Write your message here</label>
                <textarea name="message" rows ="8" placeholder = 'Enter your message' required></textarea>
                <button type = 'submit' className='contact-submit'>Submit Now</button>
            </form>
         </div>
    </div>
  )
}

export default Contact