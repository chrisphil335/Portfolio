import Card from "react-bootstrap/Card";
import super_chess_image from "../super_chess_image.png";

const SuperChess = () => (
    <>
        <Card>
            <Card.Img src={super_chess_image} />
            <Card.Body>
                <Card.Title>Super Chess</Card.Title>
                <Card.Subtitle>Videogame</Card.Subtitle>
                <Card.Text>
                    An extreme version of chess with shooting. Built as a team of 6 for software development course.
                    <ul>
                        <li>Java</li>
                    </ul>
                </Card.Text>
                <Card.Link href="https://github.com/CSC207-UofT/course-project-dragon-squirrel" target="_blank">
                    Source
                </Card.Link>
            </Card.Body>
        </Card>
    </>
);

export default SuperChess;
