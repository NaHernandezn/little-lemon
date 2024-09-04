import React from 'react'
import { useState, useEffect } from 'react';

export default function BookingForm(props) {

    const { time, setTime, availableTimes, dispatch, submitForm} = props;

    const [formErrors, setFormErrors] = useState({});

    const handleDateChange = (e) => {
        const selectedDate = new Date(e.target.value);
        setDate(e.target.value);
        dispatch({ type: 'UPDATE_TIME', payload: selectedDate });

        // Dispatch an action to update available times
        dispatch({ type: 'UPDATE_TIME ', date: selectedDate });
    };

    // Define state variables for each form field
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [date, setDate] = useState('');
    const [guests, setGuests] = useState(1);
    const [occasion, setOccasion] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = {name, email, date, time, guests, occasion };
        //console.log(formData);
        submitForm(formData);
    };

    useEffect(() => {
        const validateForm = () => {
            const errors = {};
            if (!name) errors.name = "Name is required.";
            if (!email) errors.email = "An email is required.";
            if (!date) errors.date = "Date is required.";
            if (!time) errors.time = "Time is required.";
            if (guests < 1) errors.guests = "Number of guests must be at least 1.";
            if (!occasion) errors.occasion = "Occasion is required.";
            setFormErrors(errors);
        };

    validateForm();

    }, [name, email, date, time, guests, occasion]);

  return (
    <form onSubmit={handleSubmit}>
        <label htmlFor="name">Type your name</label>
        <input
            type='text'
            id='name'
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
        />
        {formErrors.name && <span className="error">{formErrors.name}</span>}

        <label htmlFor="email">Type your email</label>
        <input
            type='email'
            id='email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
        />
        {formErrors.email && <span className="error">{formErrors.email}</span>}

        <label htmlFor="res-date">Choose date</label>
        <input
            type="date"
            id="res-date"
            value={date}
            onChange = {handleDateChange}
            required
        />
        {formErrors.date && <span className="error">{formErrors.date}</span>}

        <label htmlFor="res-time">Choose time</label>
        <select id="res-time " value={time} onChange={(e) => setTime(e.target.value)}>
            {availableTimes.map((timeOption) => (
                <option key={timeOption} value={timeOption}>
                    {timeOption}
                </option>
            ))}
        </select>
        {formErrors.time && <span className="error">{formErrors.time}</span>}

        <label htmlFor="guests">Number of guests</label>
        <input
            type="number"
            placeholder="1"
            min="1"
            max="10"
            id="guests"
            value = {guests}
            onChange={(e) => setGuests(e.target.value)}
            required
        />
        {formErrors.guests && <span className="error">{formErrors.guests}</span>}

        <label htmlFor="occasion">Occasion</label>
        <select
            id="occasion"
            value={occasion}
            onChange={ (e) => setOccasion(e.target.value)}
        >
            <option>Just dinner</option>
            <option>Birthday</option>
            <option>Anniversary</option>
            <option>Graduation</option>
            <option>Engagement</option>
        </select>
        {formErrors.occasion && <span className="error">{formErrors.occasion}</span>}

        <input
            type="submit"
            value="Make Your reservation"
            disabled={Object.keys(formErrors).length > 0} // Disable submit button if form is invalid // Disable submit button if form is invalid
        />
    </form>
  )
}
