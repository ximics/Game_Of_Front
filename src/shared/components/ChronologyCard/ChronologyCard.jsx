import React from 'react';
import './ChronologyCard.scss';

export default function ChronologyCard() {
    
        return (                   
                <figure className="chronology-card">
                    <div className="chronology-card__hover">
                        <p className="chronology-card__hover__p">17</p>
                        <figcaption className="chronology-card__hover__fig">M.Rajoy</figcaption>
                    </div>
                    <div className="chronology-card-div">
                        <img className="chronology-card-div__img" src="https://static2.abc.es/media/estilo/2020/02/13/mariano-rajoy-kSuE--620x349@abc.jpg"/>                   
                    </div>
                </figure>                                                                                                                     
        )
}