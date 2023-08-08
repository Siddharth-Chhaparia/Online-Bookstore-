import React,{useState,useContext} from "react";
import { UserContext } from "../App";


import M from 'materialize-css'
import {useNavigate} from 'react-router-dom'

const Signin = ()=>{
    const navigate = useNavigate()
    const [EnrollmentNo,setEnrollmentNo] = useState("")
    const [password,setpassword] = useState("")
    const {state,dispatch} = useContext(UserContext)
    const PostData = ()=>{
        fetch("/signin",{
            method:"post",
            headers:{
                "Content-type":"application/json"
            },
            body:JSON.stringify({
                EnrollmentNo,
                password
            })
        }).then(res=>res.json())
        .then(data=>{
            if(data.error){
                M.toast({html:data.error})
            }
            else{
                localStorage.setItem("jwt",data.token)
                localStorage.setItem("user",JSON.stringify(data.user))
                dispatch({type:"USER",payload:data.user})
                navigate('/')
            }
        })
    }
    return(
        <div className="container">
            <div className="card">
                <h2> Online Bookstore</h2>
                <input type="text" placeholder="Enrollment Number" onChange={(e)=>setEnrollmentNo(e.target.value)}></input>
                <input type="password" placeholder="password" onChange={(e)=>setpassword(e.target.value)}></input>
                <input type="submit" value="Login" onClick={()=>PostData()}></input>
                    
                
            </div>
        </div>
    )
}
export default Signin;