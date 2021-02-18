import React from 'react';
import './CharacterCard.scss';

export default function CharacterCard(props) {
    
        return (       
         <div className="character-container"> 
                
                    <figure className="character-card">
                   
                            <img className="character-card__img" src={props.character.image? props.character.image:'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/President_Barack_Obama.jpg/1200px-President_Barack_Obama.jpg'} width="248" height="320"/>
                            <div className="character-card__hover">
                                <figcaption className="character-card__hover__text">{props.character.name}</figcaption>
                            </div>
                          
                    </figure>           
                
        </div>  
        )
}