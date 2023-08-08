import React,{createContext, useContext,useEffect,useReducer} from "react";
import NavBar from './components/navbar'
import Home from "./components/home";
import Signin from "./components/signin";
import Signup from "./components/signup";
import Profile from "./components/profile";
import CreatePost from "./components/createPost";
import Bookstore from "./components/bookstore";
import RentForm from "./components/rentForm";
import "./App.css"
import {BrowserRouter,Routes, Route,useNavigate} from 'react-router-dom'
import {reducer,initialState} from './reducers/userReducer'

export const UserContext = createContext()
const Routing = ()=>{
  const navigate = useNavigate()
  useEffect(()=>{
    const user = JSON.parse(localStorage.getItem("user"))
    // console.log(user);
    if(user){
      navigate('/')
    }
    else{
      navigate('/signin')
    }
  },[])

  return(
    <Routes>
        <Route exact path= "/" element={<Home/>} />
        <Route  path="/signin" element={<Signin/>} />
        <Route path="/signup" element={<Signup/>} />
        <Route path="/profile" element={<Profile/>} />
        <Route path="/createPost" element={<CreatePost/>} />
        <Route path="/bookstore" element={<Bookstore/>} />
        <Route path="/rentForm" element={<RentForm/>} />
      
    </Routes>
  )
}

function App() {
  const[state,dispatch] = useReducer(reducer,initialState)
  return (
    <UserContext.Provider value={{state,dispatch}}>
    <BrowserRouter>
    <NavBar />
    <Routing />

    </BrowserRouter>
    </UserContext.Provider>
    
  );
}

export default App;
