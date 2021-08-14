import React from 'react'
import Leftsidbar from '../Leftsidbar/Leftsidbar'
import Content from '../Content/Content'
import Rightsidbar from '../Rightsidbar/Rightsidbar'
import './Home.css'

const Home = ()=>{
    return(
        <div class="container">
            <Leftsidbar/>
            <Content/>
            <Rightsidbar/>
        </div>
    )

}

export default Home