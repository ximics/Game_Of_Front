import React from 'react';
import CharacterInfoCardImg from './CharacterInfoCardImg/CharacterInfoCardImg';
import './CharacterInfo.scss';
import { useTranslation } from 'react-i18next'; 

export default function CharacterInfo(props) {
    
        const { t } = useTranslation();
        return (          
           
                <div className="characterInfo">  
                    <div className="characterInfo-container">
                    <CharacterInfoCardImg houseImage={props.houseImage}></CharacterInfoCardImg>        
                    
                    <div className="characterInfo-container"> 
                        <figure className="characterInfo-card">
                            <p className="characterInfo__P">{t('alliances')}</p>

                            <div className="characterInfo__contentText">
                               <ul className="characterInfo__contentText__ul">
                               {props.character.allegiances && props.character.allegiances.map((allegiance, index) =>  
                                <li key={index} className="characterInfo__contentText__ul__li">{allegiance}</li>
                               )}
                               </ul>
                            </div>    
                        </figure>           
                    </div>

                    <div className="characterInfo-container"> 
                        <figure className="characterInfo-card">
                            <p className="characterInfo__P">{t('appearances')}</p>

                            <div className="characterInfo__contentText">
                               <ul className="characterInfo__contentText__ul">
                               {props.character.appearances && props.character.appearances.map((appearance, index) =>  
                                <li key={index} className="characterInfo__contentText__ul__li">{appearance}</li>
                               )}
                               </ul>
                            </div>    
                        </figure>           
                    </div> 

                    <div className="characterInfo-container"> 
                        <figure className="characterInfo-card">
                            <p className="characterInfo__P">{t('father')}</p>

                            <div className="characterInfo__contentText">
                               <ul className="characterInfo__contentText__ul">
                              
                                <li  className="characterInfo__contentText__ul__li">{props.character.father}</li>
                               
                               </ul>
                            </div>    
                        </figure>           
                    </div>

                    <div className="characterInfo-container"> 
                        <figure className="characterInfo-card">
                            <p className="characterInfo__P">{t('descendents')}</p>

                            <div className="characterInfo__contentText">
                               <ul className="characterInfo__contentText__ul">
                               {props.character.siblings && props.character.siblings.map((sibling, index) =>  
                                <li key={index} className="characterInfo__contentText__ul__li">{sibling}</li>
                               )}
                               </ul>
                            </div>    
                        </figure>           
                    </div>

                    <div className="characterInfo-container"> 
                        <figure className="characterInfo-card">
                            <p className="characterInfo__P">{t('titles')}</p>

                            <div className="characterInfo__contentText">
                               <ul className="characterInfo__contentText__ul">
                               {props.character.titles && props.character.titles.map((title, index) =>  
                                <li key={index} className="characterInfo__contentText__ul__li">{title}</li>
                               )}
                               </ul>
                            </div>    
                        </figure>           
                    </div>

                    
                    </div>   
                </div>  
        )
    }

