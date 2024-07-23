import React from "react";
import styles from "./button.module.scss";

interface ButtonProps {
    type?: "button" | "submit" | "reset" | undefined
    text: string;
}
class Button extends React.Component<ButtonProps> {
    render() {
        return (
            <button className={styles.botao} type={undefined} >{this.props.text}</button>
        )
    }
}

export default Button;