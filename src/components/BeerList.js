import React, { useState, useEffect } from "react";
import BeerCard from "./BeerCard";
import { Col } from 'reactstrap';

const BeerList= () =>{
    const [beers, setBeers] = useState([])

    useEffect(()=>{
        const url = "https://beer-lover.p.rapidapi.com/top100"
        const key = process.env.REACT_APP_KEY
        fetch(url, {
            "method": "GET",
            "headers": {
                "x-rapidapi-host": "beer-lover.p.rapidapi.com",
                "x-rapidapi-key": key
        }})
        .then(res=>res.json())
        .then(json=>setBeers(json))
    }, [])
    
    return(
        <>
        {beers.map(beer=>{
            return(
            <Col xs="4">
                <BeerCard 
                    beer = {beer.beer}
                    style = {beer.style}
                    id = {beer.id}
                />
            </Col>
            )
        })}
        </>
    )
}
export default BeerList;