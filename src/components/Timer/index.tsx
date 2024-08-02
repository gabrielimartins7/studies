import { useEffect, useState } from "react";
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

    useEffect(() => {
        if(selected?.tempo) {
            setTime(timeForSeconds(selected.tempo));
        }
    }, [selected]);

    return(
        <div className={style.cronometro}>
            <p className={style.titulo}>Escolha um card e inicie o timer</p>
            <div className={style.relogioWrapper}>
                <Clock time={time} />
            </div>
            <Button text="Iniciar" />
        </div>
    )
}