import React from 'react';
import './ContactUs.css';

const ContactUs = () => {
  return (
    <div className='contact-box'>
      <div className="container-box">
        <div className="content">
          <div className="left-side">
            <div className="address details">
              <i className="fas fa-map-marker-alt"></i>
              <div className="topic">Address</div>
              <div className="text-one">8/C, Subranagram</div>
              <div className="text-two">Bangladesh</div>
            </div>
            <div className="phone details">
              <i className="fas fa-phone-alt"></i>
              <div className="topic">Phone</div>
              <div className="text-one">+8801777000222</div>
              <div className="text-two">+025687200</div>
            </div>
            <div className="email details">
              <i className="fas fa-envelope"></i>
              <div className="topic">Email</div>
              <div className="text-two">info.fruitswarehouse@gmail.com</div>
              <div className="text-one">fruitwhcold@gmail.com</div>
            </div>
          </div>
          <div className="right-side">
            <div className="topic-text">Need a cold storage in our warehouse for your business? <br /> Send us a message</div>
            <p className='text-secondary' style={{ fontSize: '15px' }}>If you look a cold place for your business to store your fruits item then our warehouse is right place for you. To booking your space or any types of quries related to our warehouse, you can send us message from here. It's our pleasure to help you.</p>
            <form action="#">
              <div className="input-box">
                <input type="text" placeholder="Enter your name" />
              </div>
              <div className="input-box">
                <input type="text" placeholder="Enter your email" />
              </div>
              <div className="input-box message-box">
                <textarea placeholder="Enter your message"></textarea>
              </div>
              <div className="button">
                <input type="button" value="Send Now" />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
