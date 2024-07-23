import { Book } from "../../types/book";
import Item from "./Item";
import style from "./list.module.scss";


function List({ book }: { book: Book[]}) {
    
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