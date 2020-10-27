import React from 'react'
import { Link } from 'react-router-dom';
import defaultImg from '../images/room-1.jpeg'
import {PropType} from 'prop-types'
const Room = ({room}) => {
    const {name,slug,images,price} = room
    return (
        <article className='room'>
            <div className='img-container'>
                <img src={images[0] || defaultImg} alt='single room' />
                <div className='price-top'>
                    <h6>{price}</h6>
                    <p>per night </p>
                </div>
                <Link to={`/rooms/${slug}`} className='btn-primary room-link'>
                    features
                </Link>
            </div>
            <p className='room-info'>{name}</p>
        </article>
    )
}

export default Room

//to check if props is passed and validate
// Room.PropType = {
//     room:PropType.shape({
//         name:PropType.string.isRequired,
//         slug:PropType.string.isRequired,
//         images:PropType.arrayOf(PropType.string),
//         price:PropType.number.isRequired
//     })
// }
