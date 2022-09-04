
import './App.css';
import Header from './Header'
import Home from './Home';
import { BrowserRouter as Router, Routes, Route}
from 'react-router-dom'
import Checkout from './Checkout';
import Login from './Login'
import {auth} from './firebase'
import { useEffect } from 'react';
import { useStateValue } from './StateProvider';

function App() {
   const [{},dispatch] = useStateValue();

 //attaching a listner 
  useEffect(() => {
   //will only runs once when the app component loads..
   auth.onAuthStateChanged(authUser => {
     console.log('The user is >> ', authUser)
     if(authUser)
     {
       //The user just logged in/the user was logged in
      dispatch({
        type: 'SET_USER',
        user: authUser
      })
     }
     else{
       //the user is logged out
       dispatch({
         type: 'SET_USER',
         user: null 
       })
      }
   })
  }, [])
  
  return (
    //BEM
    <Router>
    <div className="app">
    
     <Routes>
     <Route path='/login' element= {<Login/>}/>
     <Route path="/checkout" element={[<Header />,<Checkout/>]}  />
     <Route path="/" element={[<Header />,<Home/>]}  />
   
     </Routes>
    </div>
    </Router>
  );
}

export default App;
