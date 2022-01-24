import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Card, CardTitle, CardText, Button, Col } from 'reactstrap';

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
        <div>
            {stateBrew.map(item=>{
                return(
            <Col xs='3'>
                <div>
                 <Card
                    body
                    color="secondary"
                    outline>
                    <CardTitle tag="h5">
                        {item.name}
                    </CardTitle>
                    <CardText>
                      If you find yourself in {item.city}, come visit {item.name}. Visit their website below.
                    </CardText>
                    <CardText>
                      Exact Address: {item.street} {item.city}, {item.state}, {item.postal_code}
                    </CardText>
                        <Button href={item.website_url}>
                         Check out this brewery!
                        </Button>
                 </Card>
                </div>
            </Col>
                    
                )
            })}
        </div>
    )
}}

export default BreweriesDetails;