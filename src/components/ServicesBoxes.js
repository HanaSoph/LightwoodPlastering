import React from 'react';
import './ServicesBoxes.css';
import CardDeck from 'react-bootstrap/CardDeck';
import Card from 'react-bootstrap/Card';
import boxOne from '../assets/plastering1.jpg';
import boxTwo from '../assets/plastering2.jpg';
import boxThree from '../assets/plastering3.jpg';


function ServicesBoxes() {
    return (
        <CardDeck className="card-deck-styling">
            <Card>
                <Card.Img variant="top" src={boxOne} />
                <Card.Body>
                    <Card.Title className="card-header">Plastering & Plasterboarding</Card.Title>
                    <Card.Text>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                    </Card.Text>
                </Card.Body>

            </Card>
            <Card>
                <Card.Img variant="top" src={boxTwo} />
                <Card.Body>
                    <Card.Title className="card-header">Repair & Patching</Card.Title>
                    <Card.Text>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                    </Card.Text>
                </Card.Body>

            </Card>
            <Card>
                <Card.Img variant="top" src={boxThree} />
                <Card.Body>
                    <Card.Title className="card-header">Artex Cover</Card.Title>
                    <Card.Text>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                    </Card.Text>
                </Card.Body>

            </Card>
        </CardDeck>
    );
}

export default ServicesBoxes;
