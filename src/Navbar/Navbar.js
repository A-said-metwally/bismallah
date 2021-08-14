import React ,{useState , Link, Component} from 'react';
import { Navlinks  , Userdata} from '../data';
import {LS , SettingsMenu} from './Styledcomponent';

import './Navbar.css';

const Navbar = ()=>{
    const [links , setlinks] = useState(Navlinks)
    const [userdata , setuserdata] = useState(Userdata[0])
    const [Sheight , setSheight] = useState(false)
    
    const getPath = (e)=>{
        const value = e.target.value
        console.log(value)
    }

    const handleHeight = ()=>{
        setSheight(! Sheight)
        console.log(Sheight)
    }
    return(
        <nav>            
            <div className="nav-left">
                <p className="logo">Face<span>book</span></p>
                <ul>
                    {links.map((link)=>{
                        return(
                            <li className="icon"><LS.StyledLink to={link.path} ><i className={link.class} ></i></LS.StyledLink></li> 
                        )
                    })}
                </ul>
            </div>
            <div className="nav-right">

                <div className="search-box">
                    <i className="fas fa-search"></i>
                    <input type="text" placeholder="What Do You Think"/>
                </div>

                <div className="nav-user-icon online" onClick={handleHeight}>
                    <img src={userdata.image} alt=""  />
                </div>

            </div>

            <SettingsMenu height={Sheight} className="settings-menu">


                <div id="dark-btn" > 
                    <span></span>
                </div>

                <div className="user-profile">
                    <img src="images/portfolio-img5.jpg" alt=""/>
                    <div>
                        <p>Basma Mosaed</p>
                        <a href="#">See Your Profile</a>
                    </div>
                </div>
                <hr/>
                <div className="user-profile">
                    <img src="images/portfolio-img3.jpg" alt=""/>
                    <div>
                        <p>Give Feedback</p>
                        <a href="#">Help us to Improve new designe</a>
                    </div>
                </div>
                <hr/>

                <div className="settings-links">
                    <i className="fas fa-list"></i>
                    <a href=""> Settings & Privacy <i className="fas fa-caret-right right"></i></a>
                </div>
                <div className="settings-links">
                    <i className="fas fa-list"></i>
                    <a href=""> Settings & Privacy <i className="fas fa-caret-right right"></i></a>
                </div>
                <div className="settings-links">
                    <i className="fas fa-list"></i>
                    <a href=""> Settings & Privacy <i className="fas fa-caret-right right"></i></a>
                </div>
                <div className="settings-links">
                    <i className="fas fa-list"></i>
                    <a href=""> Settings & Privacy <i className="fas fa-caret-right right"></i></a>
                </div> 

            </SettingsMenu>

        </nav>
    )
}

export default Navbar