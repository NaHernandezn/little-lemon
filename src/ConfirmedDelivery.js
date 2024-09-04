import React from 'react'
import RedirectButton from './RedirectButton'

export default function ConfirmedDelivery() {
  return (
    <section className='confirmation-screen'>
        <h3>Sit down and relax! Your order will arrive soon.</h3>
        <RedirectButton route='/' label='Return'/>
    </section>
  )
}