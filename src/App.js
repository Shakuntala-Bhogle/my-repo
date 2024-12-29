
import './App.css';
import Nav from './components/Nav';
import Footer from './components/Footer';
import About from './pages/About';
import Reservations from './pages/Reservations';
import Order from './pages/Order';
import Login from './pages/Login';

import { Routes, Route } from 'react-router-dom';
import Homepage from './pages/Homepage';
import ConfirmedBooking from './pages/ConfirmedBooking';
import { fetchAPI, submitAPI } from './bookingAPI';
import { useReducer } from 'react';
import { useNavigate } from 'react-router-dom';

function App() {
const initialState = {availableTimes: fetchAPI(new Date())};
const [state, dispatch] = useReducer(updateTimes, initialState);
function updateTimes(state,date) {
return {availableTimes: fetchAPI(new Date())}
}
const navigate = useNavigate();
function submitForm(formData) {
if(submitAPI(formData)){
navigate("/confirmedbooking")
}
}

  return (
    <>
    <Nav />
    <Routes>
      <Route path='/' element={<Homepage />} />
      <Route path='/about' element={<About />} />
      <Route path='/reservations' element={<Reservations availableTimes={state} dispatch={dispatch} submitForm={submitForm}/>} />
      <Route path='/order' element={<Order />} />
      <Route path='/login' element={<Login />} />
      <Route path='/confirmedbooking' element={<ConfirmedBooking />} />
    </Routes>
    <Footer />
    </>
  );
}

export default App;
