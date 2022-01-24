import React from "react";
import { Card, CardBody, CardTitle, Button } from 'reactstrap'
import { Link } from "react-router-dom"

const BreweryCards = (props) =>{
    const { name, id } = props
    return(
        <div>
            <Card>
                <CardBody>
                    <CardTitle tag="h5">
                         {name}
                    </CardTitle>
                    <Link to={`/breweries/${id}`}>
                        <Button>
                          Breweries in this State
                        </Button>
                    </Link>
                </CardBody>
            </Card>
        </div>
    )
}


export default BreweryCards;