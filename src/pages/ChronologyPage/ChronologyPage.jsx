import { Flags } from '../../core/Flags/Flags';
import { Header } from '../../core/Header/Header';
import { Menu } from '../../core/Menu/Menu';
import ChronologyCard from '../../shared/components/ChronologyCard/ChronologyCard';
import ChronologyCard2 from '../../shared/components/ChronologyCard/ChronologyCard2';
import './ChronologyPage.scss';
import Axios from 'axios';
import React, {useEffect, useState} from 'react';
import { useContext } from 'react';
import LoadingContext from '../../shared/context/LoadingContext';


export default function ChronologyPage(){
    
    const [characters, setCharacters] = useState([]);
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
    
    

    
    return(
    <div className="chronologyPage">
        <div className="contenedorSuperior">
                    
            <div className="contenedorSuperior__Izquierdo">
            
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
            <div className="c-container-chronology">
                
                <div className="cambioFlujoEdadDiv">
                    <div className="circuloFlex">
                        <div className="circuloFlex__circulo">
                            <p className="circuloFlex__circulo__o">0</p>
                        </div>
                    </div>
                    
                    <div className="flechaFlex">
                        <svg xmlns="http://www.w3.org/2000/svg" width="29" height="42" fill="none" viewBox="0 0 29 42" className="flechaFlex__flecha">
                            <path fill="#fff" d="M28.564 28.282c.581-.572.581-1.524 0-2.116a1.448 1.448 0 0 0-2.058 0l-10.54 10.732V1.482C15.967.656 15.322 0 14.512 0c-.811 0-1.477.656-1.477 1.482v35.416L2.514 26.166c-.58-.573-1.517-.573-2.078 0-.581.592-.581 1.546 0 2.116l13.035 13.274a1.414 1.414 0 0 0 2.057 0l13.036-13.274z"/>
                        </svg>
                    </div>
                
                    <div className="barraFlex">
                        <div className="barraFlex__barra"></div>
                    </div>

                </div>
                
                <div className="c-container-chronology-scroll"> 
                <div className="margintop"></div>       
                        <ChronologyCard characters={characters}></ChronologyCard>                   
                        <ChronologyCard2></ChronologyCard2> 
                        <ChronologyCard></ChronologyCard>                  
                        <ChronologyCard2></ChronologyCard2>
                        <ChronologyCard></ChronologyCard>                   
                        <ChronologyCard2></ChronologyCard2>
                        <ChronologyCard></ChronologyCard>                   
                        <ChronologyCard2></ChronologyCard2>
                        <ChronologyCard></ChronologyCard>                   
                        <ChronologyCard2></ChronologyCard2>
                        <ChronologyCard></ChronologyCard>                   
                        <ChronologyCard2></ChronologyCard2>
                        <ChronologyCard></ChronologyCard>                   
                        <ChronologyCard2></ChronologyCard2>
                        <ChronologyCard></ChronologyCard>                   
                        <ChronologyCard2></ChronologyCard2>
                       
                    
                </div>   
            </div>    
            </div> 
        
        <div className="contenedorInferior">
            <Menu></Menu>      
        </div>
    </div>
    
    )
}