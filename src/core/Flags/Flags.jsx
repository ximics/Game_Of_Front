import React, { useState } from 'react';
import { useTranslation } from 'react-i18next'; 
import './Flags.scss'

export function Flags(){
    const { t, i18n } = useTranslation();
    const [language, setLanguage] = useState('es');
    const onChangeLanguageEs = () =>{
        i18n.changeLanguage(language);
            setLanguage('es');    
    };
    const onChangeLanguageEn = () =>{
        i18n.changeLanguage(language);
            setLanguage('en');
    };
    const onChangeLanguageFr = () =>{
        i18n.changeLanguage(language);
            setLanguage('fr');
    };
    return (
            <div className="banderas">
                <div className="separacion2"></div>
                <div onClick={onChangeLanguageEs} className="espanna">
                    
                    <svg className="banderas__españa" xmlns="http://www.w3.org/2000/svg" width="64" height="64" fill="none" viewBox="0 0 64 64">
                        <path fill="#C8414B" d="M0 48.172a4.793 4.793 0 0 0 4.793 4.794h54.414A4.793 4.793 0 0 0 64 48.172v-4.034H0v4.034zM59.207 11.034H4.793A4.793 4.793 0 0 0 0 15.828v4.034h64v-4.034a4.793 4.793 0 0 0-4.793-4.793z"/>
                        <path fill="#FFD250" d="M64 19.863H0v24.276h64V19.862z"/>
                        <path fill="#C8414B" d="M27.035 32l.935-4.21a.62.62 0 0 0-.606-.756h-.659a.621.621 0 0 0-.606.756l.936 4.21z"/>
                        <path fill="#F5F5F5" d="M28.138 29.793h-2.207v9.378h2.207v-9.378z"/>
                        <path fill="#FAB446" d="M28.69 28.69h-3.311v1.104h3.31V28.69z"/>
                        <path fill="#C8414B" d="M28.69 32h-5.518v1.103h5.518V32zM28.69 36.414l-3.31-1.104v-1.103l3.31 1.103v1.104zM10.483 32l.935-4.21a.62.62 0 0 0-.606-.756h-.659a.621.621 0 0 0-.606.756l.936 4.21z"/>
                        <path fill="#F5F5F5" d="M14.345 28.69c-.61 0-1.104.494-1.104 1.103v7.172c0 1.341 1.252 3.863 5.518 3.863s5.517-2.522 5.517-3.863v-7.172c0-.61-.494-1.103-1.104-1.103h-8.827z"/>
                        <path fill="#C8414B" d="M18.759 34.207H13.24v-4.414c0-.61.495-1.103 1.104-1.103h4.414v5.517zM18.759 34.207h5.517v2.758a2.759 2.759 0 1 1-5.517 0v-2.758z"/>
                        <path fill="#FAB446" d="M13.241 34.207h5.518v2.758a2.759 2.759 0 1 1-5.518 0v-2.758z"/>
                        <path fill="#C8414B" d="M17.655 39.16v-4.953h-1.103v5.462a2.73 2.73 0 0 0 1.103-.509zM15.448 39.669v-5.462h-1.103v4.953c.322.244.693.425 1.103.509z"/>
                        <path fill="#FFB441" d="M17.655 32h-3.31v1.103h3.31V32z"/>
                        <path fill="#FAB446" d="M17.655 29.793h-3.31v1.103h3.31v-1.104z"/>
                        <path fill="#FAB446" d="M17.103 30.449h-2.207v1.999h2.207v-2z"/>
                        <path fill="#F5F5F5" d="M11.586 29.793H9.379v9.378h2.207v-9.378z"/>
                        <path fill="#FAB446" d="M12.138 38.621h-3.31v1.104h3.31V38.62zM12.138 28.69h-3.31v1.104h3.31V28.69z"/>
                        <path fill="#5064AA" d="M12.69 39.724H8.276v1.103h4.414v-1.103z"/>
                        <path fill="#FAB446" d="M29.242 38.621h-3.31v1.104h3.31V38.62z"/>
                        <path fill="#5064AA" d="M29.241 39.724h-4.413v1.103h4.413v-1.103z"/>
                        <path fill="#FAB446" d="M22.07 27.586h-6.621v1.104h6.62v-1.104z"/>
                        <path fill="#FFB441" d="M19.311 24.276h-1.104v3.31h1.104v-3.31z"/>
                        <path fill="#F5F5F5" d="M17.655 25.931A1.657 1.657 0 0 1 16 24.276c0-.913.742-1.655 1.655-1.655s1.655.742 1.655 1.655-.742 1.655-1.655 1.655zm0-2.207a.552.552 0 1 0 0 1.104.552.552 0 0 0 0-1.104z"/>
                        <path fill="#F5F5F5" d="M19.862 25.931a1.657 1.657 0 0 1-1.655-1.655c0-.913.742-1.655 1.655-1.655s1.655.742 1.655 1.655-.742 1.655-1.655 1.655zm0-2.207a.552.552 0 1 0 .001 1.104.552.552 0 0 0 0-1.104z"/>
                        <path fill="#F5F5F5" d="M22.069 27.035a1.657 1.657 0 0 1-1.655-1.656c0-.912.742-1.655 1.655-1.655s1.655.743 1.655 1.655c0 .913-.742 1.655-1.655 1.655zm0-2.207a.552.552 0 1 0 0 1.104.552.552 0 0 0 0-1.104zM15.448 27.035a1.657 1.657 0 0 1-1.655-1.656c0-.912.743-1.655 1.655-1.655.913 0 1.655.743 1.655 1.655 0 .913-.742 1.655-1.655 1.655zm0-2.207a.552.552 0 1 0 .001 1.104.552.552 0 0 0 0-1.104z"/>
                        <path fill="#FAB446" d="M22.069 36.414v.551a.552.552 0 0 1-1.104 0v-.551h1.104zm1.103-1.104h-3.31v1.655c0 .913.743 1.656 1.655 1.656.913 0 1.655-.743 1.655-1.656V35.31z"/>
                        <path fill="#FFA0D2" d="M21.517 33.103c-.61 0-1.103-.494-1.103-1.103v-1.104a1.104 1.104 0 0 1 2.207 0V32c0 .61-.494 1.103-1.104 1.103z"/>
                        <path fill="#5064AA" d="M18.759 35.861a1.655 1.655 0 1 0 0-3.31 1.655 1.655 0 0 0 0 3.31z"/>
                        <path fill="#FAB446" d="M19.311 22.069h-1.104v3.31h1.104v-3.31z"/>
                        <path fill="#C8414B" d="M15.448 27.586l-1.103-1.103.646-.647a5.328 5.328 0 0 1 7.535 0l.646.647-1.103 1.103h-6.62z"/>
                        <path fill="#FFD250" d="M18.759 27.034a.552.552 0 1 0 0-1.103.552.552 0 0 0 0 1.103zM16.551 27.034a.552.552 0 1 0 0-1.103.552.552 0 0 0 0 1.103zM20.965 27.034a.552.552 0 1 0 0-1.103.552.552 0 0 0 0 1.103z"/>
                        <path fill="#C8414B" d="M14.345 32H8.828v1.103h5.517V32zM8.828 36.414l3.31-1.104v-1.103l-3.31 1.103v1.104z"/>
                    </svg>
                </div>   
                <div className="separacion2"></div>
                <div onClick={onChangeLanguageEn} className="england"> 
                    <svg className="banderas__inglaterra" xmlns="http://www.w3.org/2000/svg" width="64" height="64" fill="none" viewBox="0 0 64 64">
                        <path fill="#41479B" d="M59.207 11.034H4.793A4.793 4.793 0 0 0 0 15.828v32.344a4.793 4.793 0 0 0 4.793 4.794h54.414A4.793 4.793 0 0 0 64 48.172V15.828a4.793 4.793 0 0 0-4.793-4.793z"/>
                        <path fill="#F5F5F5" d="M63.934 15.035c-.378-2.27-2.35-4-4.727-4H57.96L37.517 24.427V11.034H26.483v13.394L6.04 11.034H4.793a4.794 4.794 0 0 0-4.727 4.001L17.54 26.483H0v11.034h17.539L.066 48.965c.378 2.27 2.35 4 4.727 4H6.04l20.443-13.393v13.393h11.034V39.572L57.96 52.965h1.247a4.794 4.794 0 0 0 4.727-4L46.46 37.517H64V26.483H46.461l17.473-11.448z"/>
                        <path fill="#FF4B55" d="M35.31 11.034h-6.62V28.69H0v6.62h28.69v17.655h6.62V35.31H64v-6.62H35.31V11.035z"/>
                        <path fill="#FF4B55" d="M3.1 52.657l23.322-15.14h-4.053L1.152 51.29a4.799 4.799 0 0 0 1.946 1.367zM43.298 37.517h-4.053l22.59 14.663a4.816 4.816 0 0 0 1.535-1.634L43.298 37.517zM.506 13.684l19.716 12.799h4.054L1.934 11.98c-.6.447-1.09 1.03-1.428 1.704zM41.57 26.483l21.255-13.797a4.802 4.802 0 0 0-1.962-1.358L37.517 26.483h4.054z"/>
                    </svg>    
                </div>

                <div className="separacion2"></div>
                <div onClick={onChangeLanguageFr} className="francia"> 
                    <svg  className="francia__bandera" enable-background="new 0 0 497 497" height="64" viewBox="0 0 497 497" width="50" xmlns="http://www.w3.org/2000/svg"><g><g><path d="m-25.278 200.979h545.163v92.648h-545.163z" fill="#cf7a15" transform="matrix(.707 -.707 .707 .707 -102.436 247.265)"/><g fill="#ffe11c"><path d=""/><path d=""/></g></g><g fill="#ffe11c"><path d=""/><path d=""/></g><g><path d="m480.67 16.356c-21.802-21.807-57.174-21.807-78.977 0l-20.627 20.632c-4.919 4.92-2.836 13.282 3.803 15.363 15.963 5.002 27.163 14.994 27.163 14.994s-19.922 17.789-44.497 17.789c-8.081 0-15.654-1.925-22.184-4.507-3.437-1.359-7.347-.567-9.961 2.047l-28.413 28.419c-4.919 4.92-2.836 13.282 3.803 15.363 15.963 5.002 27.163 14.994 27.163 14.994s-19.922 17.789-44.497 17.789c-8.081 0-15.654-1.925-22.184-4.507-3.437-1.359-7.347-.567-9.961 2.047l-28.413 28.419c-4.919 4.92-2.836 13.282 3.803 15.363 15.962 5.002 27.163 14.994 27.163 14.994s-19.922 17.789-44.497 17.789c-8.081 0-15.654-1.925-22.184-4.507-3.437-1.359-7.347-.567-9.961 2.047l-28.409 28.416c-4.919 4.92-2.836 13.282 3.803 15.363 15.963 5.002 27.163 14.994 27.163 14.994s-19.922 17.789-44.497 17.789c-8.081 0-15.654-1.925-22.184-4.507-3.437-1.359-7.347-.567-9.961 2.047l-28.413 28.419c-4.919 4.92-2.836 13.282 3.803 15.363 15.963 5.002 27.163 14.994 27.163 14.994s-19.921 17.788-44.496 17.788c-8.081 0-15.654-1.925-22.184-4.507-3.437-1.359-7.347-.567-9.961 2.047l-22.71 22.715c-21.773 21.778-21.773 57.063 0 78.841 21.802 21.807 57.174 21.807 78.976 0l385.365-385.45c21.773-21.777 21.773-57.063 0-78.84z" fill="#f0a346"/></g><g><path d="m480.67 16.356c-16.079-16.083-39.534-20.289-59.488-12.65 7.102 2.719 13.765 6.925 19.488 12.65 21.773 21.778 21.773 57.063 0 78.841l-385.364 385.448c-5.723 5.724-12.386 9.931-19.488 12.65 19.954 7.639 43.409 3.433 59.488-12.65l385.364-385.449c21.773-21.777 21.773-57.063 0-78.84z" fill="#eb8f21"/></g></g>
                    </svg>
                </div>   
            </div>
    )
}