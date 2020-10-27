import React, { useContext } from 'react'
import { RoomContext } from '../context';
import Title from './Title';
import Loading from './Loading';
import Room from './Room';
const FeaturedRooms = () => {
    const mycontext = useContext(RoomContext)
    
    let { loading,featuredRooms } = mycontext;
        
        featuredRooms=featuredRooms.map(room=>{
            return <Room key={room.id} room={room}/>
        })
        return (
            <section className='featured-rooms'>
            <Title  title='Featured Rooms'/>
            <div className='featured-rooms-center'>
                {loading?<Loading/>:featuredRooms}
            </div>
        
               
            </section>
        )
    }

export default FeaturedRooms
