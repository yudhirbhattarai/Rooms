import React, { Component } from 'react'
import items from './data';
import Client from './Contentful';
Client.getEntries().then(response=>console.log(response)).catch(e=>console.log(e));
const RoomContext = React.createContext();

class RoomProvider extends Component {
    state={
        rooms:[],
        sortedRooms:[],
        featuredRooms:[],
        loading:true,
        type:"all",
        capacity:1,
        price:0,
        minPrice:0,
        maxPrice:0,
        minSize:0,
        maxSize:0,
        breakfast:false,
        pets:false
    }
    getData = async ()=>{
        let resp;
        try{
            resp = await Client.getEntries({
                content_type:"rooms"
            });
            let rooms = this.formatData(resp.items);
        let featuredRooms = rooms.filter(item=>item.featured===true);
        let maxPrice = Math.max(...rooms.map(item=>item.price));
        let maxSize = Math.max(...rooms.map(item=>item.size));
        this.setState({rooms,featuredRooms,sortedRooms:rooms,loading:false,maxPrice,maxSize,price:maxPrice});
        }catch(e){
            console.log(e);
        }
        return resp;
    }
    componentDidMount(){
        this.getData();
        
    }
    handleChange = event=>{
        const target = event.target;
        const type = target.type;
        const name = target.name;
        const value = type==='checkbox'?target.checked:target.value;
        this.setState({[name]:value},this.filterRooms)


    }

    filterRooms(){
        const {rooms,type,capacity,price,maxPrice,minSize,maxSize,breakfast,pets} = this.state;
        let tempRooms = [...rooms];
        if(type !== 'all'){
            tempRooms = tempRooms.filter(item=>item.type===type);

        }
        tempRooms = tempRooms.filter(item=>item.capacity >=capacity)
        .filter(item=>item.price <=price)
        .filter(item=>item.size >=parseInt(minSize) && item.size <=parseInt(maxSize));
        if(breakfast)
        tempRooms = tempRooms.filter(item=>item.breakfast);
        if(pets)
        tempRooms = tempRooms.filter(item=>item.pets);
        this.setState({sortedRooms:tempRooms});
    }
    formatData(items){
        let tempItems = items.map(item=>{
            let id = item.sys.id;
            let images = item.fields.images.map(image=>image.fields.file.url);
            let room = {...item.fields,images,id};
            return room;
        });
        return tempItems;
    }

    getRoom=(slug)=>{
        let tempRooms = [...this.state.rooms];
        let room = tempRooms.find(room=>room.slug===slug);
        return room;
    }
    render() {
        return (
            <RoomContext.Provider value={{
                ...this.state,
                getRoom:this.getRoom,
                handleChange:this.handleChange
                }}>
                {this.props.children}
            </RoomContext.Provider>
        )
    }
}

const RoomConsumer = RoomContext.Consumer;
export {RoomProvider,RoomConsumer,RoomContext};
