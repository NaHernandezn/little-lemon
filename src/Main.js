import React from 'react'
import Bruschetta from './Assets/bruchetta.png'
import GreekSalad from './Assets/greek salad.jpg'
import LemonCake from './Assets/lemon dessert.jpg'
import Man from './Assets/petros-iakovidis-3031892099.jpg'
import Woman from './Assets/smiling-young-afro-woman-holding-color-palette-and-paintbrush-3493603087.jpg'
import Lady from './Assets/smiling-senior-woman-picture-id529676352-716900021.jpg'
import Star from './Assets/star-removebg-preview.png'
import A from './Assets/Mario and Adrian A.jpg'
import B from './Assets/Mario and Adrian b.jpg'
import DeliveryIcon from './DeliveryIcon'
import RedirectButton from './RedirectButton'

export default function Main() {
  return (
    <main className='main'>
        <section className='specials-row'>

          <h1 className='section-title'>This week's specials</h1>
          <RedirectButton route='/menu' label='Online Menu'/>

          <article className='kard' id='kard1'>
            <img className='food-img' src={GreekSalad} alt='Greek Salad'/>
            <h3 className='food-name'>Greek Salad</h3>
            <h3 className='food-price'>$12.99</h3>
            <p className='food-descrip'>
              The famous Greek salad, of crispy lettuce, peppers, olives, and our Chicago style feta cheese garnished with crunchy garlic and rosemary croutons.
            </p>
            <DeliveryIcon/>
          </article>

          <article className='kard' id='kard2'>
            <img className='food-img' src={Bruschetta} alt='Bruschetta'/>
            <h3 className='food-name'>Bruschetta</h3>
            <h3 className='food-price'>$5.99</h3>
            <p className='food-descrip'>
              Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.
            </p>
            <DeliveryIcon/>
          </article>

          <article className='kard' id='kard3'>
            <img className='food-img' src={LemonCake} alt='Lemon Cake'/>
            <h3 className='food-name'>Lemon Cake</h3>
            <h3 className='food-price'>$5.00</h3>
            <p className='food-descrip'>
              This comes straight from grandma's recipe book. Every last ingredient has been sourced and is as authentic as can be imagined.
            </p>
            <DeliveryIcon/>
          </article>
        </section>

        <section className='test-row'>{/*test = testimonials*/}
          <h1 className='section-title'>Testimonials</h1>
          <article className='kard' id='test1'>
            <img className='person-pic'src={Man} alt = 'Man'/>
            <img className='star' src={Star} alt= '3 star icon'/>
            <p className='quote'>
              “Just like my nana used to make it.”
            </p>
            <p className='person-name'>
              Philip Jones
            </p>
          </article>

          <article className='kard' id='test2'>
            <img className='person-pic' src={Woman} alt = 'Woman'/>
            <img className='star' src={Star} alt= '3 star icon'/>
            <p className='quote'>
              “Truly a new experience you can share.”
            </p>
            <p className='person-name'>
              Anna Smith
            </p>
          </article>

          <article className='kard' id='test3'>
            <img className='person-pic' src={Lady} alt = 'Old Woman'/>
            <img className='star' src={Star} alt= '3 star icon'/>
            <p className='quote'>
              “Fast, delicious and cozy. Perfect.”
            </p>
            <p className='person-name'>
              Tilly Brown
            </p>
          </article>
        </section>

        <section className='about-row'>
          <h1 className='section-title' id='about'>About</h1>
          <h2 id='litLemTit'>Little Lemon</h2>
          <h2 id='chic'>Chicago</h2>
          <p>
            We're a family-run Mediterranean restaurant, where the warmth of tradition meets the creativity of modern cuisine. Our dishes are inspired by generations-old recipes, passed down and perfected, but we infuse them with a fresh, contemporary twist.
          </p>
          <img id='A' src={A} alt='Mario and Adrian. The owners cooking'/>
          <img id='B' src={B} alt='Mario and Adrian. The owners'/>
        </section>
    </main>
  )
}
