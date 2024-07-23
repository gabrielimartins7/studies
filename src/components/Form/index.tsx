import React from "react";
import { v4 as uuidv4 } from "uuid";

import style from "./form.module.scss";

import Button from "../Button";
import { Book } from "../../types/book";

class Form extends React.Component<{
    setBook: React.Dispatch<React.SetStateAction<Book[]>>
}> {
    state = {
        materia: "",
        tempo: "00:00"
    }

    addMatter(evento: React.FormEvent<HTMLFormElement>) {
        evento.preventDefault();
        this.props.setBook(oldBook => 
            [
                ...oldBook, 
                { 
                    ...this.state,
                    selected: false,
                    completed: false,
                    id: uuidv4()
                }
            ]);
        this.setState({
            materia: "",
            tempo: "00:00"
        });
    }

    render() {
        return (
            <form className={style.novaTarefa} onSubmit={this.addMatter.bind(this)}>
                <div className={style.inputContainer}>
                    <label htmlFor="matéria">Adicione uma nova matéria</label>
                    <input 
                        type="text" 
                        name="matéria" 
                        id="study"
                        value={this.state.materia}
                        onChange={evento => this.setState({ ...this.state, materia: evento.target.value })}
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
                        value={this.state.tempo}
                        onChange={evento => this.setState({ ...this.state, tempo: evento.target.value })}
                        min="00:00:00"
                        max="1:00:00"
                        required
                    />
                </div>
                <Button
                    text="Adicionar"
                    type="submit"
                />
            </form>
        )
    }
}

export default Form;