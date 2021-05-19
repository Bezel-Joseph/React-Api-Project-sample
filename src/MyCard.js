import React from "react"
import {Card, CardBody, CardTitle, CardText} from "reactstrap"
import {FaEnvelope, FaMapMarkedAlt, FaPhone} from "react-icons/fa"

const MyCard = ({details}) => {
return(
    <Card>
<CardBody className="text-center">
    <img height="150" width="150"
     className="rounded-circle img-thumbnail border-danger"
     src={details.picture?.large}/>
     <CardTitle >
         <h1 >
<span className="pr-2">{details.name?.first}</span>
<span>{details.name?.last}</span>
</h1>
     </CardTitle>
     <FaMapMarkedAlt className="pr-2"/>
     {details.location?.city}
     <CardText >
         <span className="pr-4">
    <FaEnvelope  className="pr-2"/>
    {details.email}
    </span>
    <span>
    <FaPhone className="pr-2" />
    {details.phone}
    </span>
    </CardText>
</CardBody>
    </Card>
)

}

export default MyCard;