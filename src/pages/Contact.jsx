import React from 'react';
import data from './localDB.json'; // Adjust the path as needed
import '../App.css'
const Contact = () => {
  const contact = data.contact; // Extract 'contact' data from JSON

  return (
    <div className="contact col-md-9 p-5 mt-4">
      <h1 className="text-white">{contact.title}</h1>
      <p className="mt-4" style={{ color: 'grey' }}>
        {contact.intro}
      </p>
      <form className="mt-5">
        <input type="text" name="name" id="name" placeholder="Your Name" className="mb-4" />
        <input type="email" name="email" id="email" placeholder="Your Email" className="mb-4" />
        <textarea name="message" id="message" placeholder="Your Message" rows="4" className="mb-4"></textarea>
        <button type="submit" className="btn btn-primary">{contact.buttonText}</button>
      </form>
      <div className="dotted-line-container mt-5" style={{ width: '100%' }}>
        <div className="dotted-line" style={{ width: '100%' }}></div>
      </div>
      <div className="connect mt-4 mb-4">
        <div className="arrows">
          <i className='bx bx-right-arrow-alt'></i>
          <i className='bx bx-right-arrow-alt'></i>
          <i className='bx bx-right-arrow-alt'></i>
        </div>
        <div>
          <p>Let's Connect!</p>
        </div>
      </div>
      <div className="copyright" style={{ color: 'gainsboro' }}>
        <p>{contact.footer}</p>
      </div>
    </div>
  );
}

export default Contact;
