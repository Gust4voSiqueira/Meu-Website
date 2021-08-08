/* eslint-disable react/style-prop-object */
import './Button.css'

interface ButtonProps {
    title: string;
    image: string;
}


export function Button({ title, image }: ButtonProps) {
    return (
        <div id="button-container">
            <img src={image} alt="" />
            <p>{title}</p>
        </div>
    )
}