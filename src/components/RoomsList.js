import React from 'react'
import Room from '../components/Room';
export default function RoomsList({rooms}) {
    if(rooms.length === 0){
        return (
            <section className="section-title">
                <h4>no matching rooms found</h4>
            </section>  
        )
     }

     return (
         
             <section className="roomslist">
                 <div className="roomslist-center">
                 {rooms.map((room,index)=>{
                 return <Room key={index} room={room}/>
         })}
                 </div>

             </section>
             
     )
}
