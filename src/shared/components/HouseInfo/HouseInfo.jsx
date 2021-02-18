import React from 'react';
import './HouseInfo.scss';
import { useTranslation } from 'react-i18next'; 

export default function HouseInfo(props) {
    const { t } = useTranslation();
        return (          
                <div className="characterInfo">  
                   <div className="characterInfo-container">
                            
                    
                    <div className="characterInfo-container"> 
                        <figure className="characterInfo-card">
                            <p className="characterInfo__P">{t('motto')}</p>

                            <div className="characterInfo__contentText">
                               <ul className="characterInfo__contentText__ul">
                                <li className="characterInfo__contentText__ul__li">{props.house && props.house.words? props.house.words: 'Un glan podel lleva una glan lesponsabilidad' }</li>                                                                  
                               </ul>
                            </div>    
                        </figure>           
                    </div>

                    <div className="characterInfo-container"> 
                        <figure className="characterInfo-card">
                            <p className="characterInfo__P">{t('headquarters')}</p>

                            <div className="characterInfo__contentText">
                               <ul className="characterInfo__contentText__ul">
                                <li className="characterInfo__contentText__ul__li">{props.house && props.house.seat? props.house.seat:'En murcia' }</li>
                               </ul>
                            </div>    
                        </figure>           
                    </div>

                    <div className="characterInfo-container"> 
                        <figure className="characterInfo-card">
                            <p className="characterInfo__P">{t('region')}</p>

                            <div className="characterInfo__contentText">
                               <ul className="characterInfo__contentText__ul">
                                   <li className="characterInfo__contentText__ul__li">{props.house && props.house.region? props.house.region: 'España'}</li>
                               </ul>
                            </div>    
                        </figure>           
                    </div> 

                    <div className="characterInfo-container"> 
                        <figure className="characterInfo-card">
                            <p className="characterInfo__P">{t('alliances')}</p>

                            <div className="characterInfo__contentText">
                               <ul className="characterInfo__contentText__ul">
                               {props.house.allegiance && props.house.allegiance.map((allegiance, index)=>
                                <li key={index} className="characterInfo__contentText__ul__li">{allegiance}</li>
                               )}
                               </ul>
                            </div>    
                        </figure>           
                    </div>

                    <div className="characterInfo-container"> 
                        <figure className="characterInfo-card">
                            <p className="characterInfo__P">{t('religions')}</p>

                            <div className="characterInfo__contentText">
                               <ul className="characterInfo__contentText__ul">
                               {props.house.religion && props.house.religion.map((religion, index)=>
                                <li key={index} className="characterInfo__contentText__ul__li">{religion}</li>
                               )}
                               </ul>
                            </div>    
                        </figure>           
                    </div>

                    <div className="characterInfo-container"> 
                        <figure className="characterInfo-card">
                            <p className="characterInfo__P">{t('foundation')}</p>

                            <div className="characterInfo__contentText">
                               <ul className="characterInfo__contentText__ul">
                                   <li className="characterInfo__contentText__ul__li">{props.house.createdAt}</li>                                  
                               </ul>
                            </div>    
                        </figure>           
                    </div> 
                </div>   
                </div>       
        )
    }

