import React from 'react'
import {useContext} from 'react'
import {RoomContext} from '../Context';
import Title from '../components/Title';
const getUnique = (item,value)=>{
    return [...new Set(item.map(item=>item[value]))]
}
export default function RoomFilter({rooms}) {
    const context = useContext(RoomContext);
    const {
        handleChange,type,capacity,price,minPrice,maxPrice,minSize,maxSize,pets,breakfast
    }=context;
    let types = getUnique(rooms,'type');
    types = ['all',...types];
    types = types.map((item,index)=>{
    return <option value={item} key={index}>{item}</option>
    })
    let people = getUnique(rooms,'capacity');
    people = people.map((item,index)=>{
        return <option value={item} key={index}>{item}</option>
        })
    return (
        <section className="filter-container">
            <Title title="search rooms" />
            <form className="filter-form">
                <div className="form-group">
                    <label htmlFor="type">room type</label>
                    <select name="type" id="type" value={type}
                    className="form-control" onChange={handleChange}>
                        {types}
                    </select>

                </div>
                <div className="form-group">
                    <label htmlFor="type">Guests</label>
                    <select name="capacity" id="capacity" value={capacity}
                    className="form-control" onChange={handleChange}>
                        {people}
                    </select>

                </div>
                <div className="form-group">
                    <label htmlFor="price">room price ${price}</label>
                    <input type="range" name="price" id="price" value={price}
                    className="form-control" min={minPrice} max={maxPrice} onChange={handleChange}>
                    </input>
                </div>
                <div className="form-group">
                    <label htmlFor="size">room size</label>
                    <div className="size-inputs">
                        <input type="number" name="minSize" id="size"
                        value={minSize} onChange={handleChange} className="size-input"></input>
                        <input type="number" name="maxSize" id="size"
                        value={maxSize} onChange={handleChange} className="size-input"></input>
                    </div>
                </div>
                <div className="form-group">
                    <div className="single-extra">
                        <input type="checkbox" name="breakfast" id="breakfast" checked={breakfast} onChange={handleChange}></input>
                        <label htmlFor="breakfast">breakfast</label>
                    </div>
                    <div className="single-extra">
                        <input type="checkbox" name="pets" id="pets" checked={pets} onChange={handleChange}></input>
                        <label htmlFor="pets">pets</label>
                    </div>
                </div>
            </form>
            
        </section>
    )
}
