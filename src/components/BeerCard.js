import React from "react";
import { Link } from "react-router-dom"
import { Card, CardBody, CardTitle, Button, CardText } from 'reactstrap'

const BeerCard= (props) =>{
    const { name, style, id } = props
    return(
        <div>
            <Card>
                <CardBody>
                    <CardTitle tag="h5">
                        {name}
                    </CardTitle>
                    <CardText>
                        {style}
                    </CardText>
                    <Link to={`/beer/${id}`}>
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