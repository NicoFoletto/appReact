import React from "react";
import { Link } from "react-router-dom";

const Users= () => { 
    return(
    <div>
        <h3 style={{color:"blue", fontFamily:"serif", fontSize:"50px",fontStyle:"italic"}}>Hola desde Users</h3>
        <ul>
            <li>
                <Link to = '/home'>Home</Link> 
            </li>
            <li>
                <Link to = '/post'>Post</Link> 
            </li>
            <li>
                <Link to = '/login'>Login</Link> 
            </li>
        </ul>
    </div>

    )


}

export default Users;