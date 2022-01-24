import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const AnimalDetails = () =>{
    const [animal, setAnimal] = useState([])
    const { id } = useParams()
    const url ="https://api.openbrewerydb.org/breweries?by_name="
 
    useEffect(()=>{
        fetch(url + id)
        .then(res=>res.json())
        .then(json=>setAnimal(json))
    }, [])
    console.log(url + id)
    console.log(animal)
    if (animal === []){
        return <p>page loading...</p>
    } else{
    return(
        <div>
            {animal.name}
        </div>
    )
}}

export default AnimalDetails;