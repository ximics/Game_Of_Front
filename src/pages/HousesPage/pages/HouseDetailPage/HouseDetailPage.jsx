import Axios from 'axios';
import React, {useEffect, useState} from 'react';
import { NavLink, useParams } from 'react-router-dom';
import { Flags } from '../../../../core/Flags/Flags';
import { Header } from '../../../../core/Header/Header';
import HouseInfo from '../../../../shared/components/HouseInfo/HouseInfo';
import { useTranslation } from 'react-i18next';


import './HouseDetailPage.scss';


export default function HouseDetailPage() {

    const { t } = useTranslation();
    const HouseName = useParams().name;
    
    const [house, setHouseDetail] = useState({});

    

    useEffect(() => {
        Axios.get ('https:/api.got.show/api/show/houses/' + HouseName ).then(res => {
            setHouseDetail(res.data[0]);
        })
    },[])
     







        return (          
            <div className="houseDetailPage">
                
                <div className="contenedorSuperior">
                    
                    <div className="contenedorSuperior__Izquierdo">
                    
                        <div className="volver-container">
                            <div className="flechaVolver">
                            <NavLink to="/casas">
                                <svg className="flechaVolver__flecha" xmlns="http://www.w3.org/2000/svg" width="42" height="29" fill="none" viewBox="0 0 42 29">
                                    <path fill="#fff" d="M13.718 28.564c.572.581 1.524.581 2.116 0a1.448 1.448 0 0 0 0-2.058L5.102 15.966h35.416c.826 0 1.482-.645 1.482-1.455 0-.811-.656-1.477-1.482-1.477H5.102l10.732-10.52c.573-.58.573-1.517 0-2.078-.592-.581-1.545-.581-2.116 0L.444 13.471a1.413 1.413 0 0 0 0 2.057l13.274 13.036z"/>
                                </svg>   
                            </NavLink>       
                            </div>
                            <NavLink to="/casas"> 
                        <p className="textoVolver">{t('return')}</p>
                        </NavLink>   
                        </div> 
                    

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
                        <img src={house && house.logoURL ? house.logoURL: 'https://vramon1958.files.wordpress.com/2014/08/santo-ofc3adcio.gif'}  alt="" className="characterInfo__img" alt="" className="characterImg__img"/>   
                    </div>               
                    
                    <div className="characterName">
                        <p className="characterName__p">{house.name}</p>
                    </div>

                    
                    <HouseInfo house={house}> </HouseInfo>
                
                
                </div>
                
                <div className="contenedorInferior">
                       
                </div> 
            
            
            
            </div>    
        )
    }

