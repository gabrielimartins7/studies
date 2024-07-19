import React from "react";
import Button from "../Button";
import style from "./form.module.scss";

class Form extends React.Component {
    render() {
        return (
            <form className={style.novaTarefa} action="">
                <div className={style.inputContainer}>
                    <label htmlFor="matéria">Adicione uma nova matéria</label>
                    <input 
                        type="text" 
                        name="matéria" 
                        id="study"
                        placeholder="Qual matéria vai estudar hoje"
                        required 
                    />
                </div>
                <div className={style.inputContainer}>
                    <label htmlFor="tempo">Tempo</label>
                    <input 
                        type="time"
                        step="1"
                        name="tempo"
                        id="time"
                        min="00:00:00"
                        max="1:00:00"
                        required
                    />
                </div>
                <Button
                    text="Adicionar"
                />
            </form>
        )
    }
}

export default Form;