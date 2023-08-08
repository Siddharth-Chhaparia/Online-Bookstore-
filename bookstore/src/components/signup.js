
import React,{useState} from "react";
import M from 'materialize-css'
import {useNavigate} from 'react-router-dom'

const Signup = ()=>{
    const navigate = useNavigate()
    const [name,setname] = useState("")
    const [EnrollmentNo,setEnrollmentNo] = useState("")
    const [email,setemail] = useState("")
    const [password,setpassword] = useState("")
    const PostData = ()=>{
        fetch("/signup",{
            method:"post",
            headers:{
                "Content-type":"application/json"
            },
            body:JSON.stringify({
                name,
                email,
                EnrollmentNo,
                password
            })
        }).then(res=>res.json())
        .then(data=>{
            if(data.error){
                M.toast({html:data.error})
            }
            else{
                navigate('/signin')
            }
        })
    }
    return(
        <div className="container">
        <div className="card">
            <h2> Online Bookstore</h2>
            <input type="text" placeholder="User Name"  onChange={(e)=>setname(e.target.value)}></input>
            <input type="text" placeholder="Email"  onChange={(e)=>setemail(e.target.value)}></input>
            <input type="text" placeholder="Enrollment Number"  onChange={(e)=>setEnrollmentNo(e.target.value)}></input>
            <input type="password" placeholder="password"  onChange={(e)=>setpassword(e.target.value)}></input>
            <input type="submit" value="Signup" onClick={()=>PostData()}></input>
                
            
        </div>
    </div>
    )
}
export default Signup;