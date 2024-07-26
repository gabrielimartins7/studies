import { Book } from "../../../types/book";
import style from '../list.module.scss';

interface Props extends Book {
    selectBook: (selectedBook: Book) => void;
}

export default function Item(
    { 
        materia, 
        tempo, 
        selected, 
        completed, 
        id, 
        selectBook 
    }: Props) {
    return(
        <li className={style.item} onClick={() => selectBook({
            materia,
            tempo,
            selected,
            completed,
            id
        })}>
            <h3>{materia}</h3>
            <span>{tempo}</span>
        </li>
    )
}