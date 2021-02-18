import React from 'react';
import { NavLink } from 'react-router-dom';
import HouseCard from '../HouseCard/HouseCard';
import './HousesGallery.scss';



export default function HousesGallery(props) {
    return ( 
                 
            <div className="c-container"> 
                <div className="c-container-scroll">           
                {props.houses.map((house, index) =>                  
                <NavLink to={'/detalleCasa/' + house.name}><HouseCard key={index} house={house}></HouseCard></NavLink>)} 
                </div>
            </div>                                           
         
 )
}
