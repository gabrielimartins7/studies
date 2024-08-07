import { Book } from "../../../types/book";
import style from './item.module.scss';

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
        <li
        className={`${style.item} 
            ${selected ? style.itemSelecionado : ''}
            ${completed ? style.itemCompletado : ''}
        `}
        onClick={() => !completed && selectBook({
            materia,
            tempo,
            selected,
            completed,
            id
        })}>
            <h3>{materia}</h3>
            <span>{tempo}</span>
            {completed && <span className={style.concluido} aria-label="Estudo conluido"></span>}
        </li>
    )
}