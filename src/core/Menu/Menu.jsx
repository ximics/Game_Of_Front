import React from 'react';
import { useTranslation } from 'react-i18next'; 
import { Link } from 'react-router-dom'; 
import './Menu.scss';

export function Menu(){
    const { t } = useTranslation();

    return (    
                 
        <div className="menuContenedor">  
            <Link className="menuContenedor__personajes" to="/personajes">{t('characters')}</Link>
            <Link className="menuContenedor__casas" to="/casas">{t('houses')}</Link>
            <Link className="menuContenedor__cronologia" to="/cronologia">{t('chronology')}</Link>
        </div>                  

    )
}