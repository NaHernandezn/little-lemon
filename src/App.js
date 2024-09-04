import './App.css';
import Logo from './Assets/Logo.svg'
import { Helmet } from 'react-helmet';
import Nav from './Nav';
import { Route, Routes } from 'react-router-dom';
import OnlineMenu from './OnlineMenu'
import Reservations from './Reservations';
import Footer from './Footer';
import ConfirmedBooking from './ConfirmedBooking';
import Purchase from './Purchase';
import ConfirmedDelivery from './ConfirmedDelivery';
import Homepage from './Homepage'

function App() {
  return (
    <section className='App'>
      <Helmet>
        <meta name="og:description" content="Little Lemon is a family-owned restaurant specialized in Mediterranean food with a modern twist"/>
        <meta name="og:title" content='Little Lemon'/>
        <meta name='og:image' content={Logo}/>
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
        <link href="https://fonts.googleapis.com/css2?family=Karla:ital,wght@0,200..800;1,200..800&family=Markazi+Text:wght@400..700&display=swap" rel="stylesheet"/>
      </Helmet>
      <Nav/>
      <Routes>
        <Route path='/' element={<Homepage/>}/>
        <Route path='/menu' element={<OnlineMenu/>}/>
        <Route path='reservations' element={<Reservations/>}/>
        <Route path='/confirmed' element={<ConfirmedBooking/>}/>
        <Route path='/purchase' element={<Purchase/>}/>
        <Route path='/delivery' element={<ConfirmedDelivery/>}/>
      </Routes>
      <Footer/>
    </section>
  );
}

export default App;
