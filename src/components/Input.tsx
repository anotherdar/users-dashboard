import * as React from 'react';

import './Input.scss'

interface Extras {
    error?: string | undefined
    label?: string,
}

type InputProps = React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>,HTMLInputElement> & Extras

export const Input = React.forwardRef<HTMLInputElement, InputProps>((props, ref) => {

    return (
        <label className="input--label">
            <h1 
                className="input--label__title" 
                style={{
                    color: props.error ? 'var(--text-color-error)' : ''
                }}
            >
                {props?.label}
            </h1>
            <input 
                {...props} 
                ref={ref} 
                className="input" 
                style={{
                    borderColor: props.error ? 'var(--text-color-error)' : '',
                }}
            />
            <span className="input--error">{props.error && props.error}</span>
        </label>
    )
});