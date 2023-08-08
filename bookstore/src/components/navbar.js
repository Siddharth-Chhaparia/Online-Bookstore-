import React,{useContext} from 'react'
import { Link } from 'react-router-dom';
import {UserContext} from '../App'




const NavBar = ()=>{
    const {state,dispatch} = useContext(UserContext)
    const renderList = ()=>{
        if(state){
            return[
                <ul>
                <li><Link to="/profile">Profile</Link></li>
                <li><Link to="/createPost">Sell book</Link></li>
                <li><Link to="/bookstore">Bookstore</Link></li> 
                </ul>
            ]
        }
        else{
            return[
                <ul>
                <li><Link to="/signin">Login</Link></li>
                <li><Link to="/signup">Signup</Link></li>
                </ul>
            ]
        }
    }
    return(
        
    <nav>
    <div class="nav-wrapper white">
        <Link to={state?"/":"/signin"} className="brand-logo">Online Bookstore</Link>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
            {renderList()}
        </ul>
    </div>
    </nav>
    )
}

export default NavBar;