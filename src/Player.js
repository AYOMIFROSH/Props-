import React from "react";
import Card from "react-bootstrap/Card";
import 'bootstrap/dist/css/bootstrap.min.css';
import Rashford from "./assets/Rashford.jpg"


const Player = ({ Name, Team, Nationality, Jersey_number, Age, ImageURL}) => {
    return (
        <Card style={{ width: '18rem'}}>
            <Card.Img variant="top" src={ImageURL} />
            <Card.Body>
                <Card.Title>{Name}</Card.Title>
                <Card.Text>
                    <strong>Team:</strong> {Team} <br/>
                    <strong>Nationality:</strong> {Nationality} <br/>
                    <strong>Jersey Number:</strong> {Jersey_number} <br/>
                    <strong>Age:</strong> {Age}
                </Card.Text>
            </Card.Body>
        </Card>
    );
};

Player.defaultProps = {
    name: "Temitayo",
    team: "Manchester united",
    nationality: "Nigeria",
    jerseyNumber: 7,
    age: 25,
    imageUrl: {Rashford},
};

export default Player;