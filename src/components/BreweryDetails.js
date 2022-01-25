import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { NavItem } from "reactstrap";
import DetailCards from "./DetailCards";
import { Col } from 'reactstrap'
const BreweriesDetails = () =>{
    const { id } = useParams()
    const [stateBrew, setStateBrew] = useState([])
    const url = "https://api.openbrewerydb.org/breweries?by_state="
    useEffect(()=>{
        fetch(url + id)
        .then(res=>res.json())
        .then(json=>setStateBrew(json))
    }, [])

    console.log(stateBrew)
    if (stateBrew === []){
        return <p>page loading...</p>
    } else{
    return(
        <>
            {stateBrew.map(item=>{
                return(
                <Col xs='3'>
                <DetailCards 
                    name={item.name}
                    city={item.city}
                    state={item.state}
                    street={item.street}
                    postal_code={item.postal_code}
                    website_url={item.website_url} 
                    />
                </Col>
                )
            })}
        </>
    )
}}

export default BreweriesDetails;