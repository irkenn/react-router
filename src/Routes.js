import React from "react";
import {Switch, Route, Redirect } from 'react-router-dom';
import DogDetails from "./DogDetails";
import Dog from "./Dog";
import Home from "./Home";

function Routes({props}){
    
    return(
        <Switch>
            <Route exact path={'/dogs/details'}> <DogDetails props={props}/> </Route>
            <Route exact path={'/dogs/:urlName'}> <Dog props={props} /> </Route>
            <Route exact path={'/dogs'}> <Home props={props}/> </Route>
            <Redirect to="/dogs" /> 
        </Switch>
    )
}
export default Routes;
