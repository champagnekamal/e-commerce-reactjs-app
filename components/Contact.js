import React from 'react';
import './Contact.css';


    const Contact = () => {
      return (
        <div className='contact'>
          <div className="form">
              <span>Full name</span>
              <div>
              <input type="text" name="" id=""  required/>
              </div>
              <span>Mobile number</span>
            <div> <input type="text" name="number" id="number" required /> </div>
                <span>Email</span>
                <div><input type="email" name="email" id="email"  required/></div>
               <div><button>Submit</button></div> 
                <span>Talk to someone</span>
              
              <div> <button>Phone us</button>
                <button>Chat</button></div> 
                <span>Did you know </span>
               <span>visit our help pages more about <a href="">Promotions and deals</a></span>
          </div>
        </div>
    )
}

export default Contact
