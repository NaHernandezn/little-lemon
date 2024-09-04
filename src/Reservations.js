import React from 'react'
import BookingForm from './BookingForm'
import { useState, useReducer } from 'react';
import { useNavigate } from 'react-router-dom';

const seededRandom = function (seed) {
    var m = 2**35 - 31;
    var a = 185852;
    var s = seed % m;
    return function () {
        return (s = s * a % m) / m;
    };
};

const fetchAPI = function(date) {
    let result = [];
    let random = seededRandom(date.getDate());

    for(let i = 17; i <= 23; i++) {
        if(random() < 0.5) {
            result.push(i + ':00');
        }
        if(random() < 0.5) {
            result.push(i + ':30');
        }
    }
    return result;
};

const submitAPI = function(formData) {
    return true;
};

const initializeTimes = () => {
  const today = new Date();
  // Use fetchAPI to get the available times for today's date
  return fetchAPI(today);
}; //This is the initial state of the useReducer hook

function updateTime( state, action ) {
  //This function takes two parameter: The initial state and the action. Dispatch is going to be set as action
  switch(action.type){
    case 'UPDATE_TIME':
      return fetchAPI(action.payload);
    default:
      return state;
  }
};

export default function Reservations() {

  const [time, setTime] = useState('');

  const [availableTimes, dispatch] = useReducer(updateTime, initializeTimes()) //State (availaibleTimes) return the initial state. Dispatch is for updating the state

  const navigate = useNavigate();

  const submitForm = (formData) => {
    if (submitAPI(formData)) {
      navigate('/confirmed');
    }
  };

  return (
    <section className='reservation-page'>
      <h1>Reservations</h1>
      <BookingForm
        time = {time}
        setTime = {setTime}
        availableTimes = {availableTimes}
        dispatch = {dispatch}
        submitForm={submitForm}
      />
    </section>
  )
}
