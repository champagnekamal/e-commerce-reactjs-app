import React from 'react';
import './Home.css'
// import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <>
       <div className='header'>
              <div className="item"> <a className='link' href="Header"> Home</a></div>
              <div className="item"> <a className='link' href="Contact">Contact</a></div>
              <div className="item"> <a className='link'  href="Help">Help</a> </div>
              <div className="item"> <a className='link' href="/">Signin</a> </div>
              <div className="item" className="abc"> <input type="text" className='input1' placeholder='Search Item' /></div>
              <button className='button1'>🛒</button>
              </div>  




              <div className="list">
                
                      <div className='side'> <button className='button2'><a className='link2' href="Deals">Today's Deals</a></button> </div>
                      <div className='side'> <button className='button2'><a className='link2' href="Phones">Phones</a></button> </div>
                      <div className='side'><button className='button2'><a className='link2' href="Laptop">Laptop</a></button></div>
                      <div className='side'><button className='button2'><a className='link2' href="Grocery">Groceries</a></button></div>
                      <div className='side'><button className='button2'><a className='link2' href="Cosmetics">Cosmetics</a></button></div>
                      <div className='side'><button className='button2'><a className='link2' href="Bestseller">Bestseller</a></button></div>
                      <div className='side'><button className='button2'><a className='link2' href="Kitchen">Home & kitchen</a></button></div>
                      <div className='side'><button className='button2'><a className='link2' href="Prime">Prime</a></button></div>
               
              </div>
        </>
    )
}

export default Home
