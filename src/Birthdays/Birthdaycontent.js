import React , {useState} from 'react'
import {Events} from '../data';
import './Birthdays.css'

const Birthdaycontent = ()=>{
    let count = Events.length
    let [value , setvalue] = useState(2)

    
    const handleIncrease = ()=>{
        setBirthdata(Events)
    }

    const handleHide = ()=>{
        setvalue(2)
        setBirthdata(data)
    }

    const [data , setdata] = useState(Events.slice(0 , value))
    const [Birthdata , setBirthdata] = useState(data)
    

    return(
        <div className="Birthday-content">
            {Birthdata.map((birth)=>{
                return(
                    <div className="birthday-container">
                        <div className="wrap">
                            <img src={birth.image}/>
                            <div className="data">
                             <span>{birth.name}</span>
                                <span>{birth.age} <i>Years</i></span>
                                <span>{birth.birthdate}</span>

                            </div>
                        </div>
                        <button>Dissmis</button>
                    </div>
                    )
            })}
            { count >2 && <button onClick={handleIncrease} className="seeall">See All</button>}
            { count >2 && <button onClick={handleHide} className="seeall">Hide</button>}
        </div>
    )
}
export default Birthdaycontent