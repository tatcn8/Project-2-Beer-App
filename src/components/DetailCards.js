import React from "react";
import { Card, CardTitle, CardText, Button} from 'reactstrap';

const DetailCards = (props) => {
    const { name, city, state, street, postal_code, website_url } = props
    return(
        <div>
            <span className="font-link">
            <Card className="bg-warning" 
                body
                color="secondary"
                outline>
                 <CardTitle tag="h5">
                  {name}
                </CardTitle>
                <CardText>
                 If you are near {city}, come visit {name}. 
                 </CardText>
                <CardText>            
                Visit their website below.
                </CardText>
                <CardText>
                 Exact Address: {street} {city}, {state}, {postal_code}
                </CardText>
                <Button href={website_url} target="-blank">
                  Check out this brewery!
                </Button>
            </Card>
            </span>
        </div>
    )
}
export default DetailCards;
