import { useState } from "react";
import { timeForSeconds } from "../../common/utils/time";
import { Book } from "../../types/book";

import Button from "../Button";
import Clock from "./Clock";

import style from "./timer.module.scss";

interface Props {
    selected: Book | undefined;
}

export function Timer({ selected }: Props) {
    const [time, setTime] = useState<number>();

    if(selected?.tempo) {
        setTime(timeForSeconds(selected.tempo));
    }

    return(
        <div className={style.cronometro}>
            <p className={style.titulo}>Escolha um card e inicie o timer</p>
            Timer: {time}
            <div className={style.relogioWrapper}>
                <Clock />
            </div>
            <Button text="Iniciar" />
        </div>
    )
}