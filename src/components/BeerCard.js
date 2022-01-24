import React from "react";
import { Link } from "react-router-dom"
import { Card, CardBody, CardTitle, Button, CardText } from 'reactstrap'

const BeerCard= (props) =>{
    const { beer, style, brewery } = props
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
                    <CardText>
                       Brewed at: {brewery} brewery
                    </CardText>
                    <Link to={`/beers/${brewery}`}>
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