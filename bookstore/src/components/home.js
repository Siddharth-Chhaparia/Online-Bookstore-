import React from "react";
import "../component_css/globalchat.css"
 
const Home = ()=>{
    return(

    <div>

    <div className="main"></div>
    <h1 >Global Chat</h1>
    <div className="container">
        <h2>Welcome to <br></br>Bookworm chat </h2>
        <p className="beg">This is the beginning of this chat</p>
        <hr></hr>
        <div>
            <div className="user">User 1   <span>03/04/2023</span></div>
            <p className="msg">Hello</p>
            
        </div>
        <div>
            <div className="user">User 2   <span>03/04/2023</span></div>
            <p className="msg">hey!!!!</p>
            
        </div>
        <div>
            <div className="user">User 3   <span>03/04/2023</span></div>
            <p className="msg">hello everyone</p>
            
        </div>
        <form>
        <input type="text" placeholder="Type your text here" className="type"></input>
        <button>Send</button>
        </form>
    </div>
                
    </div>      
)}

export default Home;