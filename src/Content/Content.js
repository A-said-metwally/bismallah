import React , {useState} from 'react'
import {Myposts} from '../data'
import './Content.css'

const Content = ()=>{
    const [posts , setpost] = useState(Myposts.sort(function(a , b){return b.id - a.id}))
    const [inputdata , setinputdata] = useState("")
    const [newpost , setnewpost] = useState([])

    const [state , setstate] = useState( posts.poststate)
    const handleLike = ()=>{
        setstate(state === "Like" ? "Dislike" : "Like")
        
    }

    
    // get Day && Time 
    const postNum = Myposts.length + 1
    const Today = new Date()
    const Day = Today.getFullYear() + "-" + Today.getMonth() + "-" + Today.getDate()
    const Mode = Today.getHours() > 12 ? "Pm" : "Am"
    const Time = Today.getHours() + ":" + Today.getMinutes() + " " + Mode

    const handleChange = (e)=>{
        const value = e.target.value

        setinputdata(value)

        let input= {
            id:`${postNum}`,
            accountname:"tamim ahmed",
            accountimag:"images/portfolio-img3.jpg",
            date:`${Day}`,
            time:`${Time}`,
            posttext:value,
            postpic:"images/item-6.jpeg",
            poststate:true,
            commentsnum:0,       
        }
         setnewpost(Myposts.concat(input))
    }

    const addnewpost = (e)=>{
        e.preventDefault()
        setpost(newpost.sort(function(a , b){return b.id - a.id}))
        setinputdata("")
    }


    return(
        <div className="main-sidebar">
        <div className="story-gallery">
            <div className="story">
                <img className="story-cover" src="images/item-3.jpeg"/>
                <p className="user"><i className="fas fa-plus-circle"></i></p>
                <p>Post Story</p>
            </div>
            <div className="story">
                <img className="story-cover" src="images/item-6.jpeg"/>
                <div className="user-image"><img src="images/item-1.jpeg"/></div>
                <p>Ahmed</p>
            </div>
            <div className="story">
                <img className="story-cover" src="images/item-4.jpeg"/>
                <div className="user-image"><img src="images/item-2.jpeg"/></div>
                <p>Basma</p>
            </div>
            <div className="story">
                <img className="story-cover" src="images/item-5.jpeg"/>
                <div className="user-image"><img src="images/item-3.jpeg"/></div>
                <p>Muhammad</p>
            </div>

        </div>

        <div className="write-post-container">
            <div className="user-profile">
                <img src="images/portfolio-img6.jpg" alt=""/>
                <div>
                    <p>Ahmed Said</p>
                    <small>Public <i className="fas fa-caret-down"></i></small>

                </div>
            </div>

            <div className="post-input-container">
                <form onSubmit={addnewpost}>
                    <input type="text" onChange={handleChange} value={inputdata} rows="3" placeholder="What's on Your Mind .."></input>
                </form>

                <div className="add-post-links">
                    <a href="#"><i className="fas fa-video"></i> Live Vedio</a>
                    <a href="#"><i className="fas fa-camera"></i> Photo/Vedio</a>
                    <a href="#"><i className="far fa-smile-wink"></i> Feling/Activity</a>
                </div>
            </div>
        </div> 

        {posts.map((post)=>{
            return(
                <div className="post-container">
                <div className="post-row">
                    <div className="user-profile">
                        <img src={post.accountimag} alt=""/>
                        <div>
                            <p>{post.accountname}</p>
                            <span>{post.date} , {post.time}</span>
                        </div>
                    </div>
                    <div className="post-container-settings">
                        <a href=""><i className="fas fa-ellipsis-h"></i></a>
                        <div className="post-settings">
                            <span><i className="fas fa-thumbs-up"></i> Delete Post</span>
                            <span><i className="fas fa-thumbs-up"></i> Edit Post</span>
                            <span><i className="fas fa-thumbs-up"></i> Hide Post</span>
                        </div>
                    </div>
                </div>
    
                    <p className='post-text'>{post.posttext}<a href="#">#elmohandes</a></p>
                    <img src={post.postpic} className='post-img' />
                    <div className="post-row">
                        <div className="activity-icons">

                        <div  onClick={handleLike}>
                            <span >
                                {state === "Like" ?<i className="fas fa-thumbs-up" style={{color:'green'}} ></i> : <i className="fas fa-thumbs-down" style={{color:'red'}} ></i>}
                            </span>
                                {state === "Like" ? "Like" : "Dislike"}
                        </div>
                            <div><i className="fas fa-comment-alt"></i><span>Comment</span></div>
                            <div><i className="fas fa-share"></i><span>{post.commentsnum}</span></div>
                        </div>
                        <div className="post-profile-icon">
                            <img src={post.accountimag} alt=""/>
                            <small> <i className="fas fa-caret-down"></i></small>
    
                        </div>
                    </div>
    
            </div>
    

            )
        })}


        <button type="button" className='loade-more-btn'>Load More</button>
    </div>
)
}

export default Content