import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import DetailCards from "./DetailCards";
import { Col } from 'reactstrap'

const BreweriesDetails = () =>{
    const [stateBrew, setStateBrew] = useState([])
    const url = "https://api.openbrewerydb.org/breweries?by_state="
    const { id } = useParams()
    useEffect(()=>{
        fetch(url + id)
        .then(res=>res.json())
        .then(json=>setStateBrew(json))
          //eslint-disable-next-line
    }, [])
    
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