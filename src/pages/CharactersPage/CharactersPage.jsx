import Axios from 'axios';
import React, {useEffect, useState} from 'react';
import { Flags } from '../../core/Flags/Flags';
import { Menu } from '../../core/Menu/Menu';
import CharactersGallery from '../../shared/components/CharactersGallery/CharactersGallery';
import SearchBar from '../../shared/components/SearchBar/SearchBar';
import LoadingContext from '../../shared/context/LoadingContext';
import { useContext } from 'react';


import './CharactersPage.scss';
import {Header} from "../../core/Header/Header";


export default function CharactersPage(){

    const [characters, setCharacters] = useState([]);
    const [input,setInput] = useState('');
    const [charactersDefault, setCharactersDefault] = useState();
    const {setIsLoading} = useContext(LoadingContext)

            useEffect(() => {
            setIsLoading(true);    
            Axios.get('https://api.got.show/api/show/characters').then(res => {
                setCharacters(res.data)
                setCharactersDefault(res.data)
                setIsLoading(false);
                });
            },[])

            const updateInput = (input) => {
                const filtered = charactersDefault.filter( character => {
                    return character.name.toLowerCase().includes(input.toLowerCase())
                })
                setInput(input);
                setCharacters(filtered);
            }
        
            return (
                    
                <div className="charactersPage">
                        <div className="contenedorSuperior">                           
                            <div className="contenedorSuperior__Izquierdo">
                            <SearchBar input={input} onChange={updateInput}></SearchBar>
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
                            <CharactersGallery characters={characters}></CharactersGallery>
                        </div>   
                        
                        <div className="contenedorInferior">
                            <Menu></Menu>      
                        </div>
                    
                    
                    
                </div>
            )

}
