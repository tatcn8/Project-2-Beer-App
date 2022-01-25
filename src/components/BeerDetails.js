import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Card, CardTitle, CardText} from 'reactstrap';


const BeerDetails= () =>{
    const { id } = useParams()
    const [beer, setBeer] = useState()
    


    useEffect(()=>{
      const url = "https://beer-lover.p.rapidapi.com/beer/"
      const key = process.env.REACT_APP_KEY
      const combinedUrl = `${url}${id}`
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
          <span className="font-link">
           <Card className="bg-warning" 
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
           </span>
          <div>
            <img className = "image2" alt= "beer" src = "https://images.pexels.com/photos/1089930/pexels-photo-1089930.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"/> 
        </div>
       </div>
    )
}}


export default BeerDetails;
