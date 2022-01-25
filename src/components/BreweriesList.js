import React from "react";
import BreweryCards from "./BreweryCards";
import { Col } from "reactstrap"



const BreweriesList = (props) => {
    const StateList = 
[
    {name:"Alaska", id: "alaska"},
    {name:"Alabama", id: "alabama"},
    {name:"Arkansas", id: "arkansas"},
    {name:"Arizona", id: "arizona"},
    {name:"California", id: "california"},
    {name:"Colorado", id: "colorado"},
    {name:"Connecticut", id: "connecticut"},
    {name:"Delaware", id: "delaware"},
    {name:"Florida", id: "florida"},
    {name:"Georgia", id: "georgia"},
    {name:"Hawaii", id: "hawaii"},
    {name: "Iowa", id: "iowa"},
    {name:"Idaho", id: "idaho"},
    {name:"Illinois", id: "illinois"},
    {name:"Indiana", id: "indiana"},
    {name:"Kansas", id: "kansas"},
    {name:"Kentucky", id: "kentucky"},
    {name:"Louisiana", id: "louisiana"},
    {name:"Massachusetts", id: "massachusetts"},
    {name:"Maryland", id: "maryland"},
    {name:"Maine", id: "maine"},
    {name:"Michigan", id: "michigan"},
    {name:"Minnesota", id: "minnesota"},
    {name:"Missouri", id: "missouri"},
    {name:"Mississippi", id: "mississippi"},
    {name:"Montana", id: "montana"},
    {name:"North Carolina", id: "north_carolina"},
    {name:"North Dakota", id: "north_dakota"},
    {name:"Nebraska", id: "nebraska"},
    {name:"New Hampshire", id: "new_hampshire"},
    {name:"New Jersey", id: "new_jersey"},
    {name:"New Mexico", id: "new_mexico"},
    {name:"Nevada", id: "nevada"},
    {name:"New York", id: "new_york"},
    {name:"Ohio", id: "ohio"},
    {name:"Oklahoma", id: "oklahoma"}, 
    {name: "Oregon", id: "oregon"},
    {name:"Pennsylvania", id: "pennsylvania"},
    {name:"Rhode Island", id: "rhode_island"},
    {name:"South Carolina", id: "south_carolina"},
    {name:"South Dakota", id: "south_dakota"},
    {name:"Tennessee", id: "tennessee"},
    {name:"Texas", id: "texas"},
    {name:"Utah", id: "utah"},
    {name:"Virginia", id: "virginia"},
    {name:"Vermont", id: "vermont"},
    {name:"Washington", id: "washington"},
    {name:"Wisconsin", id: "wisconsin"},
    {name:"West Virginia", id: "west_virginia"},
    {name:"Wyoming", id: "wyoming"},
]
   

        return(
            <>

            {StateList.map(state=>{
                return(
                 <Col xs="2">
                    <BreweryCards
                        name = {state.name}
                        id = {state.id}
                        key={state.id}  />
                 </Col>
                )
                
            })}
            </>
        )
    }


export default BreweriesList;