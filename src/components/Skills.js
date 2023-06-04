import Languages from "./Languages";
import Frameworks from "./Frameworks";
import Other from "./Other";

const Skills = () => (
    <>
        <h1>Skills</h1>
        <hr></hr>
        <div style={{display: "inline-block", textAlign: "left"}}>
            <Languages />
            <Frameworks />
            <Other />
        </div>
    </>
);

export default Skills;
