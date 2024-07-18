import "./style.scss";

function List() {
    const book = [
        { 
            materia: "React Js",
            tempo: "1:00:00"
        },
        {
            materia: "TypeScript",
            tempo: "0:45:00"
        },
        {
            materia: "Inglês",
            tempo: "0:50:00"
        }
    ];
    return(
        <aside className="listaTarefas">
            <h2>Estudos do dia</h2>
            <ul>
                {book.map((item, index) => (
                    <li key={index}>
                        <h3>{item.materia}</h3>
                        <span>{item.tempo}</span>
                    </li>
                ))}
            </ul>
        </aside>
    )
}

export default List;