import { Book } from "../../types/book";
import Item from "./Item";
import style from "./list.module.scss";

interface Props {
    book: Book[],
    selectBook: (selectedBook: Book) => void;
}


function List({ book, selectBook }: Props) {
    
    return(
        <aside className={style.listaTarefas}>
            <h2>Estudos do dia</h2>
            <ul>
                {book.map((item) => (
                    <Item
                        key={item.id}
                        selectBook={selectBook}
                        {...item}
                    /> 
                ))}
            </ul>
        </aside>
    )
}

export default List;