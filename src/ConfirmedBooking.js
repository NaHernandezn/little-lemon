import React from 'react'
import RedirectButton from './RedirectButton'

export default function ConfirmedBooking() {
  return (
    <section className='confirmation-screen'>
        <h3>You have successfully booked a table! We hope to see you soon.</h3>
        <RedirectButton route='/' label='Return'/>
    </section>
  )
}
