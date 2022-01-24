import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const BreweriesDetails = (props) =>{
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
                    {/* ADD A CARD HERE TO MAKE THIS PRETTY LOOKING */}
                    </div>
                    
                )
            })}
        </div>
    )
}}

export default BreweriesDetails;