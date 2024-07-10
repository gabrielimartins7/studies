import React from "react";
import Button from "../Button";

class Form extends React.Component {
    render() {
        return (
            <form action="">
                <div>
                    <label htmlFor="matéria">Adicione uma nova matéria</label>
                    <input 
                        type="text" 
                        name="matéria" 
                        id="study"
                        placeholder="Qual matéria vai estudar hoje"
                        required 
                    />
                </div>
                <div>
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
                <Button />
            </form>
        )
    }
}

export default Form;