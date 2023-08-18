import React from "react";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import findDogByName from "./utils";

function Dog({name, props}){
    
    const { urlName } = useParams();
    let currentDog = "";
    
    if(!name){
        currentDog = findDogByName(props, urlName);
    }else{
        currentDog = findDogByName(props, name);
    }

    return (
        <div className="dog-div">
            <p>Name: {currentDog.name}</p>
            <p>Age: {currentDog.age}</p>
            <ul>
                Facts:
                {currentDog.facts.map( i => <li>{i}</li>)}
            </ul>
            <img src={currentDog.src} alt={`${currentDog.name}`}/>
        </div>
    )
}

export default Dog;