import React from "react";
import { Link } from "react-router-dom"
import { Card, CardBody, CardTitle, Button, CardText } from 'reactstrap'

const BeerCard= (props) =>{
    const { beer, style, brewery, id } = props
    return(
        <div>
            <Card className="bg-warning" >
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
                    <Link to={`/beers/${id}`}>
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