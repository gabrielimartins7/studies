import Button from "../Button";
import Clock from "./Clock";

import style from "./timer.module.scss";

export function Timer() {
    return(
        <div className={style.cronometro}>
            <p className={style.titulo}>Escolha um card e inicie o timer</p>
            <div className={style.relogioWrapper}>
                <Clock />
            </div>
            <Button text="Iniciar" />
        </div>
    )
}