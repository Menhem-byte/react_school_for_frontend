import React from 'react'
/*import {Link} from 'react-router-dom'*/
import './Cards.css'
function CardItem(props) {
    return (
        <>
            <li className="cards__item">
                <a  className="cards__item__link" href={props.path} target="_blank" rel="noreferrer">
                    <figure className="cards__item__pic-wrap"  data-category={props.label}>
                        <img src={props.src} alt="travel" className="cards__item__img" />
                    </figure>
                    <div className="cards__item__info">
                        <h5 className="cards__item__text">{props.label}</h5>
                    </div>
                </a>
               
            </li>
        </>
    )
}

export default CardItem;
