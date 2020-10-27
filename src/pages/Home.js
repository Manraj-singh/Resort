import React from 'react'
import Banner from '../components/Banner'
import Hero from '../components/Hero'
import { Link } from 'react-router-dom';
import Services from '../components/Services';
import FeaturedRooms from '../components/FeaturedRooms';
const Home = () => {
    return (
        <div>
            <Hero>
                <Banner title="luxurious rooms" subtitle='deluxe rooms starting a 299/-' >
                    <Link to='/rooms' className='btn-primary' >our rooms</Link>
                </Banner>
            </Hero>
            <Services />
            <FeaturedRooms/>
        </div>
    )
}

export default Home
