import React from "react";
import { Link } from "react-router-dom"
import { Card, CardBody, CardTitle, Button, CardText } from 'reactstrap'

const BeerCard= (props) =>{
    const { beer, style } = props
    return(
        <div>
            <Card>
                <CardBody>
                    <CardTitle tag="h5">
                        {beer}
                    </CardTitle>
                    <CardText>
                        Style: {style}
                    </CardText>
                    <Link to={`/beers/${beer}`}>
                        <Button>
                          More Details About This Beer
                        </Button>
                    </Link>
                </CardBody>
            </Card>
        </div>
    )
}

export default BeerCard;