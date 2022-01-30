import React from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {
  function sendEmail(e) {
    e.preventDefault();
    emailjs
      .sendForm(
        'service_rxcv3wi',
        'template_p8onx9r',
        e.target,
        'user_N96NhZlNAe8XTpWbD5BCs'
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  }

  return (
    <div className='contact' id='contact'>
      <div className='title pink-neon'>
        <div className='separator pink-neon'></div>
        <div className='tilt-left' style={{ display: 'flex' }}>
          <span className='title__letter'>C</span>
          <span className='title__letter flicker-fast'>O</span>
          <span className='title__letter'>N</span>
          <span className='title__letter falling-left'>T</span>
          <span className='title__letter flicker-slow'>A</span>
          <span className='title__letter'>C</span>
          <span className='title__letter'>T</span>
        </div>
        <div className='separator pink-neon'></div>
      </div>
      <form className='contact__form' onSubmit={sendEmail} autocomplete='off'>
        <div className='contact__form-divider'>
          <label htmlFor='name' className='contact__name-label'>
            Name:
          </label>
          <input
            type='text'
            placeholder='Name'
            name='name'
            className='contact__name-input'
          />
        </div>
        <div className='contact__form-divider'>
          <label htmlFor='email' className='contact__email-label'>
            Email:
          </label>
          <input
            placeholder='Email'
            type='email'
            name='email'
            className='contact__email-input'
          />
        </div>
        <div className='contact__form-divider'>
          <label htmlFor='message' className='contact__message-label'>
            Message:
          </label>
          <textarea
            rows='5'
            id='message-box'
            name='message-box'
            className='contact__message-textarea'
            placeholder='Type your message here'
            pattern='^[a-zA-Z1-9].*'
            required=''
          ></textarea>
        </div>
        <button className='btn secondary'>Send</button>
      </form>
    </div>
  );
};

export default Contact;
