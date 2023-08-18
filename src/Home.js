import React from "react";
import Dog from "./Dog";

function Home({props}){
    
    return (
        <div className="home-div">
            <ul>
             {props.map( (dog, idx) =><li key={idx}> <Dog name={dog.name} props={props}/> </li>)}
            </ul>
        </div>
    )
}

export default Home;