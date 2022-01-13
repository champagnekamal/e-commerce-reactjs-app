import React from 'react';
import Home from'./components/Home';
import Contact from './components/Contact';
import Help from './components/Help';
import Signin from './components/Signin'
import Bestseller from './Pages/Bestseller'
import Cosmetics from './Pages/Cosmetics'
import Deals from './Pages/Deals'
import Grocery from './Pages/Grocery'
import Kitchen from './Pages/Kitchen'
import Laptop from './Pages/Laptop'
import Phones from './Pages/Phones'
import Prime from './Pages/Prime'

import './App.css'
import {BrowserRouter, Route, Routes} from 'react-router-dom';

const App = () => {
  return (
    // <Router>
   <BrowserRouter>
    <div>

     <Home />,
     <Routes>
     <Route path='/Home' exact element= {<Home/>}/>
     <Route path='/contact' exact element= {<Contact/>}/>
     <Route path='/help' exact element= {<Help/>}/>
     <Route path='/' exact element= {<Signin/>}/>
     <Route path='/bestseller' exact element= {<Bestseller/>}/>
     <Route path='/cosmetics' exact element= {<Cosmetics/>}/>
     <Route path='/deals' exact element= {<Deals/>}/>
     <Route path='/grocery' exact element= {<Grocery/>}/>
     <Route path='/kitchen' exact element= {<Kitchen/>}/>
     <Route path='/laptop' exact element= {<Laptop/>}/>
     <Route path='/phones' exact element= {<Phones/>}/>
     <Route path='/prime' exact element= {<Prime/>}/>
    
    </Routes>
     
      
      
   
    </div>
    </BrowserRouter>
    // </Router>
  )
}

export default App;
