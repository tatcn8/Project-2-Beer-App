import React, { useState, useEffect } from "react";
import AnimalCards from "./AnimalCards";

const FishList = () => {
    const [animals, setAnimals] = useState([])
    const url ="https://api.openbrewerydb.org/breweries?by_state=missouri"
    useEffect(()=>{
        fetch(url)
        .then(res=>res.json())
        .then(json=>setAnimals(json))
    }, [])
    console.log(animals)
    return(
        animals.map(animal=>{
            return (
                <AnimalCards 
                name = {animal.name}
                state={animal.state}
                id={animal.id}/>
            )
        })
    )
}

export default FishList;