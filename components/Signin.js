import React from 'react';
import './Signin.css'

const Signin = () => {
    return (
        <div className='signin'>
         <h1>Signin!</h1>
         <form action="">
             <span><b>Email or Username</b></span>
             <input type="text" name="" id="" placeholder='email or username' required/> <br /><br />
             <span> <b>Password</b></span>
            <div><input type="password" name="password" id="" placeholder='password' required/></div> <br /><br />
            <button className="submit">Signin</button>
         </form>
        </div>
    )
}

export default Signin
