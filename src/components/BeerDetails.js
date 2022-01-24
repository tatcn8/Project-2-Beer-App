import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const BeerDetails= () =>{
    const { id } = useParams
    const [beer, setBeer] = useState([])
    const url = "https://beer-lover.p.rapidapi.com/beer/"
    const key = process.env.REACT_APP_KEY

    useEffect(()=>{
        fetch(url + id, {
            "method": "GET",
            "headers": {
                "x-rapidapi-host": "beer-lover.p.rapidapi.com",
                "x-rapidapi-key": key
        }})
        .then(res=>res.json())
        .then(json=>setBeer(json))
    }, [])

    console.log(beer)
    if (beer === []){
        return <p>page loading...</p>
    } else{
    return(
        <div>
            {beer.map(item=>{
                return(
                    <>
                      Name: {item.beer}
                    {/* try adding a card to make this look pretty */}
                    </>
                    
                )
            })}
        </div>
    )
}}


export default BeerDetails;
