import React, { useState, useEffect } from "react";

const FishList = () => {
    const [animals, setAnimals] = useState([])
    const url ="https://zoo-animal-api.herokuapp.com/animals/rand/10"
    useEffect(()=>{
        fetch(url)
        .then(res=>res.json())
        .then(json=>setAnimals(json))
    }, [])
    console.log(animals)
    return(
        animals.map(animal=>{
            return animal.name
        })
    )
}

export default FishList;