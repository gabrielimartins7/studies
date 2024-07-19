import Item from "./Item";
import style from "./list.module.scss";

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
        <aside className={style.listaTarefas}>
            <h2>Estudos do dia</h2>
            <ul>
                {book.map((item, index) => (
                    <Item
                        key={index}
                        materia={item.materia}
                        tempo={item.tempo}
                    /> 
                ))}
            </ul>
        </aside>
    )
}

export default List;