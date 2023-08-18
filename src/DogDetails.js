import React from "react";
import { Link } from "react-router-dom/cjs/react-router-dom";

function DogDetails ({props}){

     return(
        <ul>
            {props.map( (i, idx) => ( 
                        <li key={idx}> 
                            <Link  to={`/dogs/${i.name.toLowerCase()}`}> {i.name} </Link> 
                        </li>))
            }
        </ul>
     )
}

export default DogDetails;