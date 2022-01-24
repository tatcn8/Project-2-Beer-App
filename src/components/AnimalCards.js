import React from "react";
import { Card, CardBody, CardTitle, CardText, Button } from 'reactstrap'
import { Link } from "react-router-dom"


const AnimalCards = (props) => {
    const { name, state, id } = props
    return(
        <div>
            <Card>
                <CardBody>
                    <CardTitle tag="h5">
                        {name}
                    </CardTitle>
                    <CardText>
                        
                        State: {state}
                    </CardText>
                    <Link to={`/fish/${id}`}>
                        <Button>
                            CLICK FOR MORE INFO
                        </Button>
                    </Link>
                </CardBody>
            </Card>
        </div>
    )
}

export default AnimalCards;