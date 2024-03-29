import Card from "react-bootstrap/Card";
import edge_detection_image from "../edge_detection_image.png";

const EdgeDetection = () => (
    <>
        <Card>
            <Card.Img src={edge_detection_image} />
            <Card.Body>
                <Card.Title>Edge Detection</Card.Title>
                <Card.Subtitle>Edge detection program</Card.Subtitle>
                <Card.Text>
                    Uses convolution and the Sobel algorithm to detect edges and draw them.
                    <ul>
                        <li>C</li>
                    </ul>
                </Card.Text>
            </Card.Body>
        </Card>
    </>
);

export default EdgeDetection;
