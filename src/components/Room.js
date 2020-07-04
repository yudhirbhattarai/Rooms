import React from 'react'
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
export default function Room({room}) {  
    const {name,slug,images,price}=room;
    return (
        <article class="room">
            <div className="img-container">
                <img src={images[0]} alt="single room"></img>
                <div className="price-top">
                    <h6>${price}</h6>
                    <p>per night</p>
                </div>
                <Link to={`/rooms/${slug}`} className="btn-primary room-link">
                    Features
                </Link>
            </div>
    <div className="room-info">{name}</div>
        </article>
    )
}
Room.propTypes = {
    room:PropTypes.shape({
        name:PropTypes.string.isRequired,
        slug:PropTypes.string.isRequired,
        images:PropTypes.arrayOf(PropTypes.string).isRequired,
        price:PropTypes.number.isRequired
    })
};
