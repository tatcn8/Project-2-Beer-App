import React from "react";
import { Card, CardBody, CardTitle, Button } from 'reactstrap'
import { Link } from "react-router-dom"

const BreweryCards = (props) =>{
    const { name, id } = props
    return(
        <div>
            <Card className="bg-warning">
                <CardBody>
                    <Link to={`/breweries/${id}`}>
                            <Button>
                            {name}
                            </Button>
                    </Link>
                </CardBody>
            </Card>
        </div>

    )
}


export default BreweryCards;