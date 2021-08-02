import React from 'react'
import CardItem from './CardItem'
import './Cards.css'
import library from '../images/library.jpg'
import Registration from '../images/ogden.jpg'
import mv from '../images/MV.jpg'
import calendar from '../images/calendar.jpg'
import covid from '../images/covid.jpg'
function OgdenCards() {
    return (
       <div className="cards">
           <h1>Check out these epic destination</h1>
           <div className="cards__container">
               <div className="cards__wrapper">
                   <ul className="cards__items">
                       <CardItem 
                       src={Registration}
                       text='Registration Info'
                       path='/registration'
                       label='Registration Info'
                       />
                        <CardItem 
                       src={mv}
                       text='MV Campus'
                       path='/MV'
                       label='MV Campus'
                       />
                        <CardItem 
                       src={library}
                       text='Library'
                       path='https://almadina.insigniails.com/Library/Home'
                       label='Library '
                       />
                        <CardItem 
                       src={calendar}
                       text='calendar'
                       path='/Services'
                       label='Calendar '
                       />
                        <CardItem 
                       src={covid}
                       text='covid-19'
                       path='/Services'
                       label='Covid-19 Update '
                       />
                       
                   </ul>
               </div>
           </div>
       </div>
    )
}

export default OgdenCards;
