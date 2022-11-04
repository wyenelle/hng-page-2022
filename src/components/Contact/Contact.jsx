import React from 'react'
import './Contact.css'

const Contact = () => {
  return (
    <section className='section-form'>
      <div className="form-section">
      <header>
            <h1> Contact Me </h1>
            <p> 
                Hi there,contact me to ask me about anything you have in mind.
            </p>
        </header>

        <form>
            <div className='form-control'>
                <div>
                    <label > First Name</label>
                    <input id='first-name' type='text' placeholder='Enter your first name '/>
                </div>

                <div>
                    <label > Last Name</label>
                    <input id='last-name' type='text' placeholder='Enter your last name '/>
                </div>
            </div>

            <div className="email-control">
                <label>Email</label>
                <input type='email' id='email' placeholder='yourname@email.com' />
            </div>

            <div className="message-control">
                <label>Message</label>
                <textarea placeholder="send me a message to me and i'll reply as soon as possible " id='message'/>
            </div>

            <div className="checkbox-control">
       <input type='checkbox'  id='checkbox'/>
        <label htmlFor='checkbox'> You agree to providing you data to Zuri who may contact you</label>
            </div>

            <button id='btn__submit' type='submit'> Submit</button>
           
        </form>
      </div>
    </section>
  )
}

export default Contact