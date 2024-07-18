import React from "react";
import styles from "./button.module.scss";

class Button extends React.Component {
    render() {
        return (
            <button className={styles.botao}>Iniciar</button>
        )
    }
}

export default Button;