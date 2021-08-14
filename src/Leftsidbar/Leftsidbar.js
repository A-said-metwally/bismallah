import React from 'react'
import Birthdays from '../Birthdays/Birthdays'

import './Leftsidbar.css'


const Leftsidbar = ()=>{
    return(
        <div className="left-sidebar">
            <Birthdays/>
            <div class="imp-links">
                <a href="#"><i className="fas fa-newspaper"></i> Latest News</a>
                <a href="#"><i className="fas fa-user-friends"></i>Friends</a>
                <a href="#"><i className="fas fa-users"></i>Groups</a>
                <a href="#"><i className="fas fa-cart-plus"></i>Marketplace</a>
                <a href="#"><i className="fas fa-tv"></i>Watch</a>
                <a href="#">See More</a>
            </div> 
            <div className="shortcut-links">
                <p>Your Shortcuts</p>
                <a href="#"><img src="images/portfolio-img7.jpg" alt=""/>web Developers</a>
                <a href="#"><img src="images/portfolio-img8.jpg" alt=""/>web Design Course</a>
                <a href="#"><img src="images/portfolio-img7.jpg" alt=""/>React Js</a>
                <a href="#"><img src="images/portfolio-img8.jpg" alt=""/>jQuery</a>

            </div>


        </div>
    )

}

export default Leftsidbar