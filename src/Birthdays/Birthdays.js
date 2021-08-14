import React , {useState} from 'react'
import Birthdaycontent from './Birthdaycontent'
import {Events} from '../data';
import './Birthdays.css'


const Birthdays = ()=>{
    
    let count  = Events.length

    console.log(count)
    return(
        <div>
            <p className="birthday"><i class="fas fa-birthday-cake"></i> Birthdays Events</p>
            {count === 0 && <p className="no-event">No Events Today</p>}
            {count > 0 && <Birthdaycontent/>}
        </div>
    )

}

export default Birthdays