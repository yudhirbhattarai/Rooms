import React from 'react'
import RoomFilter from './RoomFilter'
import RoomsList from './RoomsList'
import {RoomConsumer} from '../Context';
import Loading from '../components/Loading';
export default function RoomsContainer() {
    return <RoomConsumer>
        {
            (value)=>{
                const {loading,sortedRooms,rooms} = value;
                if(loading){
                    return <Loading/>
                }
                return (
                    <div>
                        <RoomFilter rooms={rooms}></RoomFilter>
                        <RoomsList rooms={sortedRooms}></RoomsList>
                    </div>
                )
            }
        }
    </RoomConsumer>
    
}
