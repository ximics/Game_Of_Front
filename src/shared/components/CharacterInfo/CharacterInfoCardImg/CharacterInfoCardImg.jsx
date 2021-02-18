import React from 'react';
import './CharacterInfoCardImg.scss';
import { useTranslation } from 'react-i18next'; 

export default function CharacterInfoCardImg(props) {
    const { t } = useTranslation();
        return (       
         <div className="characterInfo-container"> 
            <figure className="characterInfo-card">
                <p className="characterInfo__P">{t('house')}</p>

                <div className="characterInfo__content">
                    <img src={props.houseImage && props.houseImage.logoURL ? props.houseImage.logoURL: 'https://pbs.twimg.com/profile_images/1220416528400756738/Uk21f5nu_400x400.jpg'}  alt="" className="characterInfo__img"/>
                </div>    
            </figure>           
        </div>  
        )
    }
