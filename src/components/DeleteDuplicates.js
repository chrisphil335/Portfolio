import Card from "react-bootstrap/Card";
import deduplicate_image from "../deduplicate_image.png";

const DeleteDuplicates = () => (
    <>
        <Card>
            <Card.Img src={deduplicate_image} />
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
                <Card.Link href="https://github.com/chrisphil335/Delete-Duplicates" target="_blank">Source</Card.Link>
            </Card.Body>
        </Card>
    </>
);

export default DeleteDuplicates;
