import React,{useState} from "react";
import M from 'materialize-css'
import {useNavigate} from 'react-router-dom'

const CreatePost = ()=>{
    const navigate = useNavigate()
    const [title,settitle] = useState("")
    const [sellingOption, setSellingOption] = useState('sell');

    const handleOptionChange = (event) => {
      setSellingOption(event.target.value);
    };
    const [body,setbody] = useState("")
    const [image,setimage] = useState("")
    const [url,setUrl] = useState("")
    const postDetails = ()=>{
        const data = new FormData()
        data.append('file',image)
        data.append("upload_preset","Online-bookstore" )
        data.append("cloud_name","dav96vhfq")
        fetch("https://api.cloudinary.com/v1_1/dav96vhfq/image/upload",{
            method:"post",
            body:data
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data.url);
            setUrl(data.url)
        })
        .catch(err=>{
            
           
        })

        fetch("/createpost",{
            method : "post",
            headers:{
                "Content-Type":"application/json",
                "Authorization":"Bearer "+localStorage.getItem("jwt")
            },
            body:JSON.stringify({
                title,
                body,
                Imgurl:url

            })
        }).then(res=>res.json())
        .then(data=>{
            if(data.error){
                M.toast({html:data.error,classes:"#c62828 red darken-3"})
            }
            else{
                M.toast({html:"Created Post successfully"})
                navigate('/profile')
            }
        })
    }

    return(

        <div className="container">
            Sell your book
            <input type="text" placeholder="Title" value={title} onChange={(e)=>settitle(e.target.value)} />

            <input type="text" placeholder="Price" value={body} onChange={(e)=>setbody(e.target.value)}  />
            <span>Upload Image</span>
            
            <br></br>
            <input type="file" placeholder="Description" onChange={(e)=>setimage(e.target.files[0])}  />
            <br></br>
            

            <input type="submit" onClick={()=>postDetails()}/>
            
        </div>

    )
}
export default CreatePost;