import React from "react";
import { Link } from 'react-router-dom';


function Navbar({props}){
    

    return(
        <div className="navbar-ul">
            <Link to={'/dogs'}> Home </Link>
            <Link to={`/dogs/details`}> Details </Link>
         
        </div>
    );
}

export default Navbar;