import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Card, CardTitle, CardText} from 'reactstrap';


const BeerDetails= () =>{
    const { id } = useParams()
    const [beer, setBeer] = useState()
    const url = "https://beer-lover.p.rapidapi.com/beer/"
    const key = process.env.REACT_APP_KEY
    const combinedUrl = `${url}${id}`

    console.log(combinedUrl)

    useEffect(()=>{
        fetch(combinedUrl, {
            "method": "GET",
            "headers": {
                "x-rapidapi-host": "beer-lover.p.rapidapi.com",
                "x-rapidapi-key": key
        }})
        .then(res=>res.json())
        .then(json=>setBeer(json))
    }, [])

    console.log(beer)

    if (!beer){
        return <p>page loading...</p>
    } else{
    return(
        <div>
           <Card
              body
              color="secondary"
              outline>
              <CardTitle tag="h5">
                {beer.beer}
              </CardTitle>
              <CardText>
                Style: {beer.style}
              </CardText>
              <CardText>
                Brewed at {beer.brewery} brewery, {beer.beer} has an average score of {beer.score}.
              </CardText>
              <CardText>
                Proudly brewed in {beer.state}, {beer.country}.
              </CardText>
           </Card>
          
       </div>
    )
}}


export default BeerDetails;
