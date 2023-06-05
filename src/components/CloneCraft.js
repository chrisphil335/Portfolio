import Card from "react-bootstrap/Card";
import clonecraft_image from "../clonecraft_image.png";

const CloneCraft = () => (
    <>
        <Card>
            <Card.Img src={clonecraft_image} />
            <Card.Body>
                <Card.Title>CloneCraft</Card.Title>
                <Card.Subtitle>Videogame</Card.Subtitle>
                <Card.Text>
                    Minecraft clone made using Ursina game engine in Python.
                    <ul>
                        <li>Python</li>
                        <li>Ursina</li>
                    </ul>
                </Card.Text>
            </Card.Body>
        </Card>
    </>
);

export default CloneCraft;
