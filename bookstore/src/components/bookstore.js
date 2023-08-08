import React ,{useEffect, useState} from "react";
import "../component_css/home.css"
import { useNavigate } from 'react-router-dom';



 
const Bookstore = ()=>{
    let navigate = useNavigate();
    const routeChange = ()=>{
        let path = '/rentForm'
        navigate(path)
    }
    const [data,setData] = useState([])
    useEffect(()=>{
        fetch('/allpost',{
            headers:{
                "Content-Type":"application/json",
                "Authorization":"Bearer "+localStorage.getItem("jwt")

            }

        }).then(res=>res.json())
        .then(result=>{
            setData(result.posts)
        })
    },[])

    return(
    <div>
        <section><h2>Welcome to our online bookstore!</h2></section>
        <h2>Featured Books</h2>
        
        {
            data.map(item=>{
                return(
                    <div style={{display: 'inline-block', width: '50%', height: '70%'}} >
                    
                        <section id="featured" >
                                <div key={item._id} >
                                    
                                    <img src={item.img} style={{width:'300px',height:'300px'}} alt="Book 1"/>
                                    <p>{item.title}</p>
                                    <p>{item.body}</p>
                                    
                                    <button onClick={routeChange} className="buy">Buy Now</button>
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