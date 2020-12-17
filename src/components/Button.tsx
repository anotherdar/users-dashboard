import * as React from 'react'
//styles
import './Button.scss'


interface Extras {
    extraClass?: string,
    errors?: boolean | string |undefined
}
type ButtonProps = React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLButtonElement>,HTMLButtonElement> & Extras


export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>((props, ref) => {
    const {children, errors} = props

    return (
        <button
            ref={ref} 
            className={`btn ${props?.extraClass} ${errors ? 'animation-shake' : ''}`}
            style={{
                backgroundColor: `${errors ? 'var(--text-color-error)' : ''}`
            }}
        >
            {children}
        </button>
    )
})