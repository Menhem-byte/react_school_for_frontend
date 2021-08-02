import React from 'react'
import CardItem from './CardItem'
import './Cards.css'
import bus from '../images/bus.jpg'
import ogden from '../images/ogden.jpg'
import mv from '../images/MV.jpg'
import calendar from '../images/calendar.jpg'
import covid from '../images/covid.jpg'
function Cards() {
    return (
       <div className="cards">
           <h1>Check out these epic destination</h1>
           <div className="cards__container">
               <div className="cards__wrapper">
                   <ul className="cards__items">
                       <CardItem 
                       src={ogden}
                       text='Ogden Campus'
                       path='/Ogden'
                       label='Ogden Campus'
                       />
                        <CardItem 
                       src={mv}
                       text='MV Campus'
                       path='/MV'
                       label='MV Campus'
                       />
                        <CardItem 
                       src={bus}
                       text='Busses'
                       path='/Services'
                       label='Busses '
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

export default Cards;
