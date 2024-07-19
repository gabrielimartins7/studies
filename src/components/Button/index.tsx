import React from "react";
import styles from "./button.module.scss";

interface ButtonProps {
    text: string;
}
class Button extends React.Component<ButtonProps> {
    render() {
        return (
            <button className={styles.botao}>{this.props.text}</button>
        )
    }
}

export default Button;