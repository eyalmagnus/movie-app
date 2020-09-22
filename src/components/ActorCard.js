import React from "react";
const { Card, ListGroup, ListGroupItem } = require("react-bootstrap");

const ActorCard = (props) => {
  return (
    <div>
      <Card>
        <Card.Img variant="top" src={props.actor.image} />
        <Card.Body>
          <Card.Title>
            {props.actor.fname} {props.actor.lname}
          </Card.Title>
        </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroupItem>Age: {props.actor.actorAge()}</ListGroupItem>
        </ListGroup>
        <Card.Body>
          <Card.Link href={props.actor.imdblink}>TMDB Link</Card.Link>
        </Card.Body>
      </Card>
    </div>
  );
};

export default ActorCard;
