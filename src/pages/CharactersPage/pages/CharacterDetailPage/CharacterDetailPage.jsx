import Axios from 'axios';
import React, { useState, useEffect } from 'react';
import { NavLink, useParams } from 'react-router-dom';
import { Flags } from '../../../../core/Flags/Flags';
import { Header } from '../../../../core/Header/Header';
import CharacterInfo from '../../../../shared/components/CharacterInfo/CharacterInfo';

import './CharacterDetailPage.scss';


export default function CharacterDetailPage() {

    const CharacterName = useParams().name;
    
    const[character, setCharacterDetail] = useState({});
    const[houseImage, setHouseImage] = useState({});

    

    useEffect(() => {
        Axios.get ('https:/api.got.show/api/show/characters/' + CharacterName ).then(res => {
            setCharacterDetail(res.data);
            Axios.get ('https:/api.got.show/api/show/houses/' + res.data.house).then(res => {
                setHouseImage(res.data[0]);
            })
        },[])
    },[])     
    
    return (          
            <div className="characterDetailPage">
               
               <div className="contenedorSuperior">
                    
                    <div className="contenedorSuperior__Izquierdo">
                    <NavLink to="/personajes">
                    <div className="volver-container">
                            <div className="flechaVolver">
                                <svg className="flechaVolver__flecha" xmlns="http://www.w3.org/2000/svg" width="42" height="29" fill="none" viewBox="0 0 42 29">
                                    <path fill="#fff" d="M13.718 28.564c.572.581 1.524.581 2.116 0a1.448 1.448 0 0 0 0-2.058L5.102 15.966h35.416c.826 0 1.482-.645 1.482-1.455 0-.811-.656-1.477-1.482-1.477H5.102l10.732-10.52c.573-.58.573-1.517 0-2.078-.592-.581-1.545-.581-2.116 0L.444 13.471a1.413 1.413 0 0 0 0 2.057l13.274 13.036z"/>
                                </svg>   
                                 
                            </div>    
                        <p className="textoVolver">Volver</p>
                        
                        </div>
                        </NavLink> 
                    </div>    
                    
                    <div className="contenedorSuperior__Derecho">   
                        <div className="banderas">                   
                            <Flags></Flags>    
                        </div> 
                        <div className="home">
                            <Header></Header>
                        </div>   
                    </div>     
                             
                </div>        
                    
                <div className="contenedorMedio">     
                    
                    <div className="characterImg">
                        <img src={character.image} alt="" className="characterImg__img"/>   
                    </div>               
                    
                    <div className="characterName">
                        <p className="characterName__p">{character.name}</p>
                    </div>

                
                <CharacterInfo character={character} houseImage={houseImage}></CharacterInfo>
                
               
                    
                    
                </div>  
                
                
                <div className="contenedorInferior">
                       
                </div>  
               
            
            
            
            </div>   
            
        )
    }

