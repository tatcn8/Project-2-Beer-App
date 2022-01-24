import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const BreweriesDetails = () =>{
    const { id } = useParams()
    const [stateBrew, setstateBrew] = useState([])
    const url = "https://api.openbrewerydb.org/breweries?by_state="
    useEffect(()=>{
        fetch(url + id)
        .then(res=>res.json())
        .then(json=>setstateBrew(json))
    }, [])

    console.log(stateBrew)
    if (stateBrew === []){
        return <p>page loading...</p>
    } else{
    return(
        <div>
            {stateBrew.map(item=>{
                return(
                    <div>
                      <div>Name: {item.name}</div> 
                      <div>Website: {item.website_url}</div>
                    {/* try adding a card to make this look pretty */}
                    </div>
                    
                )
            })}
        </div>
    )
}}

export default BreweriesDetails;