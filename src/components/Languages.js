const languages = ["Python", "C", "HTML/CSS/JavaScript", "Java", "Assembly"];

const Languages = () => (
    <>
        <h2>Languages</h2>
        <ul>
            {languages.map((item) => (
                <li key={item}>{item}</li>
            ))}
        </ul>
    </>
);

export default Languages;
