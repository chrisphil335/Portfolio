const frameworks = ["React", "Bootstrap", "Flask", "Ursina"];

const Frameworks = () => (
    <>
        <h2>Frameworks/Libraries</h2>
        <ul>
            {frameworks.map((item) => (
                <li key={item}>{item}</li>
            ))}
        </ul>
    </>
);

export default Frameworks;
