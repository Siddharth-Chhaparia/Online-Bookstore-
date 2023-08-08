import React ,{useContext, useEffect, useState} from "react";
import "../component_css/home.css"
import { useNavigate } from 'react-router-dom';
import { UserContext } from "../App";



 
const Bookstore = ()=>{
    let navigate = useNavigate();
    const {state,dispatch} = useContext(UserContext)
    const routeChange = ()=>{
        let path = '/rentForm'
        navigate(path)
    }
    const [data,setData] = useState([])
    useEffect(()=>{
        fetch('/mypost',{
            headers:{
                "Content-Type":"application/json",
                "Authorization":"Bearer "+localStorage.getItem("jwt")

            }

        }).then(res=>res.json())
        .then(result=>{
            setData(result.mypost)
            // console.log(result);
            
        })
    },[])

    return(
    <div>
        <section><h2>Welcome {state?state.name:"loading"} </h2></section>
        <h2>Request Created by you</h2>
       
        {
            data.map(item=>{
                return(
                    <div style={{display: 'inline-block', width: '50%', height: '70%'}}>
                    
                        <section id="featured">
                                    <button onClick={routeChange} className="buy">Delete Request</button>
                                <div key={item._id}>
                                    
                                    <img src={item.img} style={{width:'300px',height:'300px'}} alt="Book 1"/>
                                    <p>{item.title}</p>
                                    <p>{item.body}</p>
                                    
                                    {/* <button class="rent">Rent Now</button> */}
                                </div>
                        </section>
                    </div>
                )
            })
        }
        
   
               
    </div>    
)}        
export default Bookstore