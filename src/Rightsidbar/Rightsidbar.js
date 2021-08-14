import React from 'react'

import './Rightsidbar.css'

const Rightsidbar = ()=>{
    return(
            <div class="right-sidebar">
                <div class="sidbar-title">
                    <h4>Events</h4>
                    <a href="#">See All</a>
                </div>

                <div class="event">
                    <div class="left-event">
                        <h3>18</h3>
                        <span>March</span>
                    </div>
                    <div class="right-event">
                        <h4>Social Media</h4>
                        <p>Wilson Tech Park</p>
                        <a href="#">More Info</a>
                    </div>
                </div>
                <div class="event">
                    <div class="left-event">
                        <h3>22</h3>
                        <span>April</span>
                    </div>
                    <div class="right-event">
                        <h4>Social Media</h4>
                        <p>Wilson Tech Park</p>
                        <a href="#">More Info</a>
                    </div>
                </div>
                
                <div class="sidbar-title">
                    <h4>Advertisement</h4>
                    <a href="#">Close</a>
                </div>
                <img src="images/item-10.jpeg" alt="" class="sidebar-ads"/>
                
                <div class="sidbar-title">
                    <h4>Conversation</h4>
                    <a href="#">Hide Chat</a>
                </div>
                
                <div class="online-list">
                    <div class="online">
                        <img src="images/portfolio-img5.jpg" alt=""/>
                        <div></div>
                    </div>
                    <p>Allison Monia</p>
                </div>
                <div class="online-list">
                    <div class="online">
                        <img src="images/portfolio-img4.jpg" alt=""/>
                        <div></div>
                    </div>
                    <p>Allison Monia</p>
                </div>
                <div class="online-list">
                    <div class="online">
                        <img src="images/portfolio-img3.jpg" alt=""/>
                        <div></div>
                    </div>
                    <p>Allison Monia</p>
                </div>

            </div>
    )

}

export default Rightsidbar