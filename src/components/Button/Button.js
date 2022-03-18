/* eslint-disable react/style-prop-object */
import { useThemeGlobal } from '../../context/themeContext'
import './Button.css'

export function Button({ title, image }) {
    const [ useTheme ] = useThemeGlobal()

    return (
        <div className={`button-container button-${useTheme}`}>
            <img src={image} alt="Icone" />
            <p>{title}</p>
        </div>
    )
}