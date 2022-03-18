/* eslint-disable react/style-prop-object */
import './Button.css'

interface ButtonProps {
    title: string;
    image: string;
}


export function Button({ title, image }: ButtonProps) {
    return (
        <div className="button-container">
            <img src={image} alt="" />
            <p>{title}</p>
        </div>
    )
}