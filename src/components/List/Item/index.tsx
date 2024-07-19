import style from '../list.module.scss';

export default function Item({ materia, tempo }: { materia: string, tempo: string }) {
    return(
        <li className={style.item}>
            <h3>{materia}</h3>
            <span>{tempo}</span>
        </li>
    )
}