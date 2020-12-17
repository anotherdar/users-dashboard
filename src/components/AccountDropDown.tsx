import React, { FC, useEffect, useState } from 'react'
import {useHistory} from 'react-router-dom'
import {useDispatch} from 'react-redux'

import {logOut} from '../features/login/loginSlice'

import './AccountDropDown.scss'

export const DropDownAvatar: FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const {push} = useHistory()
    const dispatch = useDispatch()
    const toOpenAndClose = () => setIsOpen(prevState => !prevState);

    const handleEscape = (e: KeyboardEvent) => {
        if(e.key === "Esc" || e.key === 'Escape') setIsOpen(false)
    }

    useEffect(() => {
        document.addEventListener('keydown', handleEscape, {
            once: true
        });

        return () => document.removeEventListener('keydown', handleEscape);
    }, [])

    const handleLogout = () => {
        dispatch(logOut())
        push('/auth/signin')
    }

    return (
        <div className="account">
            <button onClick={toOpenAndClose} className="account-avatar">
                <i className="material-icons">account_circle</i>
            </button>

            {isOpen && <button tabIndex={-1} className="account-dropdown" onClick={() => setIsOpen(false)}></button>}
            {
                isOpen && (
                    <div className="account-menu">
                        <button 
                            onClick={handleLogout}
                            className="account-menu__item "
                        >
                            Cerrar sesion
                        </button>
                    </div>
                )
            }
        </div>
    )
}