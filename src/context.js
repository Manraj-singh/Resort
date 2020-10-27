import React, { useEffect, useState } from 'react'
//import data from './data'
import client from './contentful'
const RoomContext = React.createContext()

const RoomProvider = ({children}) => {
    const [flag,setflag] = useState(false)
    const [items, setitems] = useState({
        rooms:[],
        sortedRooms:[],
        featuredRooms:[],
        loading:true,
        type:'all',
        capacity:0,
        price:0,
        minPrice:0,
        maxPrice:0,
        minSize:0,
        maxSize:0,
        breakfast:false,
        pets:false
    })
    
    const getData = async()=>{
        try{
            let response = await client.getEntries({
                content_type:'beachResort',
                order:'-fields.price'
            });
        let rooms = formatData(response.items) 
        console.log(response)
        let featuredRooms = rooms.filter(room => room.featured ===true);
        let maxPrice = Math.max(...rooms.map(item=>item.price))
        let maxSize = Math.max(...rooms.map(item=>item.size))
        
        setitems({
            ...items,
            rooms,
            sortedRooms:rooms,
            featuredRooms,
            loading:false,
            price:maxPrice,
            maxPrice,
            maxSize
        })
        }
        


        catch(error){
            console.log(error)
        }
    }

    useEffect(() => {
       getData();
        
    },[])
//since we have complex data we format it in simple object
    const formatData= (items)=>{
        let tempItems = items.map(item =>{
            let id =item.sys.id;
            let images = item.fields.images.map(image =>image.fields.file.url);
            let room ={ ...item.fields,images,id};
            return room
        })
        return tempItems
    }

    const getRoom=(pslug)=>{
        let tempRooms =  [...items.rooms]
        
        const room =tempRooms.find((room)=>room.slug===pslug)
        return room
    }
    const handleChange = e =>{
        const target = e.target;
        const value =target.type ==='checkbox'?target.checked:target.value;
        const name = e.target.name;
        
        setitems({
            ...items,
            [name]:value
           
        })
        
        
    }
    useEffect(() => {
        if(flag){
            
            filterRooms()
        }
        
        setflag(true)

    }, [items.type,items.capacity,items.price,items.breakfast,items.pets,items.minSize,items.maxSize])
    const filterRooms=()=>{
       let { rooms,type,capacity,maxSize,minSize,minPrice,maxPrice,price,breakfast,pets}= items 
        //all the rooms
       let tempRooms =[...rooms];
       //parising into number
       capacity = parseInt(capacity)
       price = parseInt(price)
        //filter by capacity
        if(capacity!=1){
            tempRooms= tempRooms.filter(room=>room.capacity>=capacity)
        }
        //filter bby price
        tempRooms = tempRooms.filter(room =>room.price<=price)
        //filter  by size
        tempRooms= tempRooms.filter(room=> room.size>=minSize && room.size<=maxSize)
        //filter by breakfast
        if(breakfast){
            tempRooms=tempRooms.filter(room=>room.breakfast===true)
        }
        //filter by pets
        if(pets){
            tempRooms=tempRooms.filter(room=>room.pets===true)
        }
       if(type!=='all'){
           tempRooms=tempRooms.filter(room =>room.type===type)
       }
       setitems({
           ...items,
           sortedRooms:tempRooms
       })
    }

    return (
        <RoomContext.Provider value={{...items,getRoom:getRoom,handleChange:handleChange}}>
            {children}
        </RoomContext.Provider>
    )
}

const RoomConsumer  = RoomContext.Consumer;

export { RoomProvider,RoomConsumer,RoomContext}
