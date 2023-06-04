import Card from "react-bootstrap/Card";
import deduplicate_image from "../deduplicate_image.png";

const DeleteDuplicates = () => (
    <>
        <Card className="h-100" style={{width: "20rem"}}>
            <Card.Img width="500" src={deduplicate_image} />
            <Card.Body>
                <Card.Title>Delete Duplicates</Card.Title>
                <Card.Subtitle>Spotify web app</Card.Subtitle>
                <Card.Text>
                    Remove duplicate tracks from playlists.
                    <ul>
                    <li>Python</li>
                    <li>Flask</li>
                    <li>Spotify Web API</li>
                    </ul>
                </Card.Text>
                <Card.Link href="https://github.com/chrisphil335/Delete-Duplicates">Source</Card.Link>
            </Card.Body>
        </Card>
    </>
);

export default DeleteDuplicates;
