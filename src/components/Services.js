import React, { Component } from 'react'
import Title from './Title';
import {FaBeer,FaCocktail,FaHiking,FaShuttleVan} from 'react-icons/fa';
export default class Services extends Component {
 state={
     services:[
         {
             icon:<FaCocktail/>,
             title:"free cocktail",
             info:"Lorem ipsum, Loprem ipsum"
         },
         {
            icon:<FaHiking/>,
            title:"Endless Hiking",
            info:"Lorem ipsum, Loprem ipsum"
        },
        {
            icon:<FaShuttleVan/>,
            title:"free shuttle",
            info:"Lorem ipsum, Loprem ipsum"
        },
        {
            icon:<FaBeer/>,
            title:"strongest beer",
            info:"Lorem ipsum, Loprem ipsum"
        }
     ]
 };
    render() {
        return (
            <section className="services">
                <Title title="services"></Title>
                <div className="services-center">
                    {this.state.services.map((item,index)=>{
                        return (<article key={index} className="service">
                            <span>{item.icon}</span>
                    <h6>{item.title}</h6>
                    <p>{item.info}</p>
                        </article>)
                    })}
                </div>
            </section>
        )
    }
}
