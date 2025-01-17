import React from 'react'
import ContactForm from './ContactForm'
const Contact = () => {
  return (
    <div className='animateContainer'>
      <div className='relative rounded-lg '>
      <iframe title="Map Me" className="w-[90%] mx-auto my-5 rounded-lg saturate-25" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d243647.57488219143!2d78.09622329032584!3d17.412106419460336!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb99daeaebd2c7%3A0xae93b78392bafbc2!2sHyderabad%2C%20Telangana!5e0!3m2!1sen!2sin!4v1737020382191!5m2!1sen!2sin" width="400" height="300"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      </div>
      <ContactForm />
    </div>
  )
}

export default Contact