import React from 'react';
import './SearchBar.scss';
import { useTranslation } from 'react-i18next';


export default function SearchBar({onChange:setKeyword,input:keyword}) {
    const { t } = useTranslation();
       
        return (          
            <div className="c-searchbar">
                <div className="c-searchbar__div">
                    <div className="c-searchbar__img">
                        <svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" fill="none" viewBox="0 0 21 21">
                            <path fill="#fff" d="M20.872 19.634l-6.1-6.1a8.27 8.27 0 0 0 1.853-5.221C16.625 3.729 12.896 0 8.312 0 3.73 0 0 3.729 0 8.313c0 4.583 3.729 8.312 8.313 8.312a8.27 8.27 0 0 0 5.221-1.854l6.1 6.1c.171.172.448.172.62 0l.618-.618a.438.438 0 0 0 0-.619zm-12.56-4.759A6.57 6.57 0 0 1 1.75 8.313 6.57 6.57 0 0 1 8.313 1.75a6.57 6.57 0 0 1 6.562 6.563 6.57 6.57 0 0 1-6.562 6.562z"/>
                        </svg>
                    </div>    
                
                    
                    <input value={keyword} onChange={(e) => setKeyword(e.target.value)} className="c-searchbar__searchbar" placeholder={t('search')} type="text"/>
                    
                
                
                <div className="c-searchbar__rectangle"></div>    
                </div>                      
            </div>    
        )
    }
