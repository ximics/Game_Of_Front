import React from 'react';
import './HouseCard.scss';

export default function HouseCard(props) {
    
        return (       
         <div className="house-container"> 
            <figure className="house-card">
                <div className="cuadrar">  
                   
                        <img className="house-card__img" src={props.house.logoURL? props.house.logoURL:'https://vramon1958.files.wordpress.com/2014/08/santo-ofc3adcio.gif'}/>
                            
                    <div className="house-card__hover">
                        <figcaption className="house-card__hover__text">{props.house.name}</figcaption>
                    </div>
                </div>  
            </figure>           
        </div>  
        )
    }
