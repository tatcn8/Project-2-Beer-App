import React from "react";
import { Card, CardBody, Button } from 'reactstrap'
import { Link } from "react-router-dom"

const BreweryCards = (props) =>{
    const { name, id } = props
    return(
        <div>
            <span className="font-link">
            <Card className="bg-warning">
                <CardBody>
                    <Link to={`/breweries/${id}`}>
                        <Button>
                            {name}
                        </Button>
                    </Link>
                </CardBody>
            </Card>
            </span>
        </div>

    )
}
export default BreweryCards;