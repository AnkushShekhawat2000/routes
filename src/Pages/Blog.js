import React from "react"
import { useNavigate } from "react-router-dom"


const Blog = ({count,setCount}) =>{

    const navigate = useNavigate();
     
    return (

        <div>
            <h1>Blog</h1>
            <p>This is the Blog page</p>
            <br/>
            <h2>Count : {count}</h2>
            <button onClick={()=>setCount(count+1)}>Increment</button>
            <button onClick={()=>setCount(count-1)}>decrement</button>
            <button onClick={()=>setCount(0)}>Reset</button>

            <button onClick={()=>navigate(-1)}>Back</button>
            <button onClick={()=>navigate(+1)}>Next</button>

        </div>
    )
}

export default Blog