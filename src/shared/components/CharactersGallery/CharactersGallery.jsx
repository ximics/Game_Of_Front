import React from 'react';
import { NavLink } from 'react-router-dom';
import CharacterCard from '../CharacterCard/CharacterCard';
import './CharactersGallery.scss';



export default function CharactersGallery(props) {
   
        return (
                         
         <div className="c-container">          
                <div className="c-container-scroll"> 
                  
                    {props.characters.map((character, index) => 
                    <NavLink to={'/detalleDePersonaje/' + character.name}>                 
                    <CharacterCard key={index} character={character}></CharacterCard>
                    </NavLink> )} 
                </div>
                  
        </div> 
                                                        
        )
}
