import React, { Component } from 'react'
import {RoomContext} from '../Context'
import defaultBcg from '../images/room-1.jpeg'
import { Link } from 'react-router-dom';
import StyledHero from '../components/StyledHero';
import Banner from '../components/Banner';

export default class SingleRoom extends Component {
    constructor(props){
        super(props);
        this.state={
            slug:this.props.match.params.slug
        }
    }
    static contextType=RoomContext;
    render() {
        const {getRoom} = this.context;
        const room  = getRoom(this.state.slug)
        if(!room){
            return <div className="error">
                <h3>no such room found...</h3>
                <Link to="/rooms" className="btn-primary"> back to rooms</Link>
            </div>
        };
        const {name,description,capacity,size,price,extras,breakfast,pets,images}=room;
        const [mainImage,...defaultImages] = images;
        console.log(defaultImages);
        return (
            <>
            <StyledHero img={mainImage}>
                <Banner title={`${name} room`}>
                <Link to="/rooms" className="btn-primary"> back to rooms</Link>
                </Banner>
            </StyledHero>
            <section className="single-room">
                <div className="single-room-images">
                {defaultImages.map((image,index)=>{
                    return <img key={index} src={image} alt="" class={name}/>
                })}
                </div>
            
            <div className="single-room-info">
                <article className="desc">
                    <h3>details</h3>
                    <p>{description}</p>
                </article>
                <article className="info">
                    <h3>info</h3>
                    <h6>price: ${price}</h6>
                    <h6>size: {size} SQFT</h6>
                    <h6>max capacity: {capacity}{`${capacity===1?"Person":"People"}`}</h6>
                    <h6>{pets?"pets allowed":"no pets allowed"}</h6>
                    <h6>{breakfast && "breakfast provided"}</h6>
                </article>
            </div>
            </section>
            <section className="room-extras">
                <h6>extras</h6>
                <ul class="extras">
                    {extras.map((item,index)=>{
                        return <li key={index}>- {item}</li>
                    })}
                </ul>
            </section>
            </>
        )
    }
}
