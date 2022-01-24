import React, { useState, useEffect } from "react";
import BeerCard from "./BeerCard";
import { Col } from 'reactstrap';

const BeerList= () =>{
    const [beers, setBeers] = useState([])
    const url = "https://beer-lover.p.rapidapi.com/search/country/United%20States"
    const key = process.env.REACT_APP_KEY
    useEffect(()=>{
        fetch(url, {
            "method": "GET",
            "headers": {
                "x-rapidapi-host": "beer-lover.p.rapidapi.com",
                "x-rapidapi-key": key
        }})
        .then(res=>res.json())
        .then(json=>setBeers(json))
    }, [])
console.log(beers)
    return(
        <>
        {beers.map(beer=>{
            return(
            <Col xs="4">
                <BeerCard 
                    name = {beer.beer}
                    style = {beer.style}
                    id = {beer.id}
                    key ={beer.id}/>
            </Col>
            )
        })}
        
        
        </>
    )
}

export default BeerList;