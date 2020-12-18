import * as React from 'react'
//styles
import './styles/Button.scss'


interface Extras {
    extraclass?: string,
    errors?: boolean | string | undefined
}
type ButtonProps = React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> & Extras


export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>((props, ref) => {
    const { children, errors } = props

    return (
        <button
            {...props}
            ref={ref}
            className={`btn ${props?.extraclass} ${errors ? 'animation-shake' : ''}`}
            style={{
                backgroundColor: `${errors ? 'var(--text-color-error)' : ''}`
            }}
        >
            {children}
        </button>
    )
})