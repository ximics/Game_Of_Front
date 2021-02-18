import React from 'react';
import './HomePage.scss';
import { Menu } from '../../core/Menu/Menu';
import { Flags } from '../../core/Flags/Flags';
import { useTranslation } from 'react-i18next';
import {Header} from "../../core/Header/Header";

export default function HomePage(){
    
    const { t } = useTranslation();
    
    return(
    <div className="menuPage">
               
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
                    
                    <div className="homePageDiv">
                        <h1 className="homePageDiv__title">{t('got')}</h1>       
                    </div>
                
                </div>    
                
                <div className="contenedorInferior">
                    <Menu></Menu>      
                </div>
    </div>
    
    )
}