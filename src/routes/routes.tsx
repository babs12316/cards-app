import React from "react"
import {
   Switch,
    Route,
   } from "react-router-dom";
import CardsComponent from "../components/CardsComponent/CardsComponent"

const Routes =():JSX.Element=>(
        <Switch>
             <Route path="/">
            <CardsComponent />
          </Route>
  
       <Route path="/card/:id">
            <CardsComponent />
          </Route>
        </Switch>
    )

    export default Routes;