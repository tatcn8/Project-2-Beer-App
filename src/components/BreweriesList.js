import React, { useState } from "react";
import BreweryCards from "./BreweryCards";



const BreweriesList = (props) => {
    const StateList = [{name:"Alaska", id: "alaska"},
    {name:"Alabama", id: "alabama"},
    {name:"Arkansas", id: "arkansas"},
    {name:"Arizona", id: "arizona"},
    {name:"California", id: "california"},
    {name:"Colorado", id: "colorado"},
    {name:"Connecticut", id: "connecticut"}]
    // "Delaware",
    // "Florida",
    // "Georgia",
    // "Guam",
    // "Hawaii",
    // "Iowa",
    // "Idaho",
    // "Illinois",
    // "Indiana",
    // "Kansas",
    // "Kentucky",
    // "Louisiana",
    // "Massachusetts",
    // "Maryland",
    // "Maine",
    // "Michigan",
    // "Minnesota",
    // "Missouri",
    // "Mississippi",
    // "Montana",
    // "North Carolina",
    // "North Dakota",
    // "Nebraska",
    // "New Hampshire",
    // "New Jersey",
    // "New Mexico",
    // "Nevada",
    // "New York",
    // "Ohio",
    // "Oklahoma",
    // "Oregon",
    // "Pennsylvania",
    // "Rhode Island",
    // "South Carolina",
    // "South Dakota",
    // "Tennessee",
    // "Texas",
    // "Utah",
    // "Virginia",
    // "Vermont",
    // "Washington",
    // "Wisconsin",
    // "West Virginia",
    // "Wyoming"]
    const [state, setState] = useState(StateList)

        return(
            <div>

            {state.map(state=>{
                return(
                    <BreweryCards
                        name = {state.name}
                        id = {state.id} 
                        />
                )
                
            })}
            </div>
        )
    }


export default BreweriesList;