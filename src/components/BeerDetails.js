import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Card, CardTitle, CardText} from 'reactstrap';


const BeerDetails= () =>{
    const { beer } = useParams()
    const [bier, setBier] = useState()
    const url = "https://beer-lover.p.rapidapi.com/search/beer/"
    const key = process.env.REACT_APP_KEY


    const combinedUrl = `${url}${beer}`
    console.log(combinedUrl)

    useEffect(()=>{
        fetch(combinedUrl, {
            "method": "GET",
            "headers": {
                "x-rapidapi-host": "beer-lover.p.rapidapi.com",
                "x-rapidapi-key": key
        }})
        .then(res=>res.json())
        .then(json=>setBier(json))
    }, [])

    console.log(bier)

    if (!bier){
        return <p>page loading...</p>
    } else{
    return(
        <div>
           <Card
              body
              color="secondary"
              outline>
              <CardTitle tag="h5">
                {bier[0].beer}
              </CardTitle>
              <CardText>
                Style: {bier[0].style}
              </CardText>
              <CardText>
                Brewed by {bier[0].brewery} Brewery, {bier[0].beer} has an average score of {bier[0].score}.
              </CardText>
              <CardText>
                Proudly brewed in {bier[0].state}, {bier[0].country}.
              </CardText>
           </Card>
          
       </div>
    )
}}


export default BeerDetails;
