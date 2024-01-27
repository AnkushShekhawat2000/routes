import React from "react"

import {Link,NavLink} from "react-router-dom"

const Navbar = ()=>{
    return (
        <div className="navbar">
             <NavLink to="/">Home</NavLink>
             <NavLink to="/blog">Blog</NavLink>
             <NavLink to="/about">about</NavLink>
             <NavLink to="/contact">contact</NavLink> 

        </div>
    )
}

export default Navbar;

//  <a href="/">Home</a>
// <a href="/blog">Blog</a>
// <a href="/about">about</a>
// <a href="/contact">contact</a> 
