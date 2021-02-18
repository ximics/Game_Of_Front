import Axios from 'axios';
import React, {useEffect, useState} from 'react';
import { Flags } from '../../core/Flags/Flags';
import { Header } from '../../core/Header/Header';
import { Menu } from '../../core/Menu/Menu';
import HousesGallery from '../../shared/components/HousesGallery/HousesGallery';
import SearchBar from '../../shared/components/SearchBar/SearchBar';
import { useContext } from 'react';


import './HousesPage.scss';
import LoadingContext from '../../shared/context/LoadingContext';


export default function HousesPage() {
    const [houses, setHouses] = useState([]);
    const [input, setInput] = useState('');
    const [charactersDefault, sethousesDefault] = useState();
    const {setIsLoading} = useContext(LoadingContext);
    
            useEffect(() => {
            setIsLoading(true);    
            Axios.get('https://api.got.show/api/show/houses/').then(res => {
                setHouses(res.data)
                sethousesDefault(res.data)
                setIsLoading(false);
                });
            },[])
            const updateInput = (input) => {
                const filtered = charactersDefault.filter( house => {
                    return house.name.toLowerCase().includes(input.toLowerCase())
                })
                setInput(input);
                setHouses(filtered);
            }
            return (
                <div className="housesPage">
                    
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
                            <HousesGallery houses={houses}></HousesGallery>
                        </div> 
                        
                        <div className="contenedorInferior">
                            <Menu></Menu>      
                        </div>
                    
                </div>
            )
}
