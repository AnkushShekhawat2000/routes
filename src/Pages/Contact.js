import React from "react"
import { useNavigate } from "react-router-dom"


const Contact = ({count}) =>{
  
    let navigate = useNavigate();

    return (
        <div>
            <h1>Contact</h1>
            <h1>Value ofCount - {count}</h1>
            <p>This is the Contact page</p>
            <button onClick={()=>navigate("/blog")}>Go to the Blog1</button>
            {/* <button onClick={()=>navigate("blog")}>Go to the Blog2</button> */}

            <button onClick={()=>navigate(-1)}>Back</button>
            <button onClick={()=>navigate(+1)}>Next</button>

            
        </div>
    )
}

export default Contact