import React from 'react';
import './styles.scss'

let data = new Date()

export function Footer() {
    return (
        <footer>
            <p>Copyright ⓒ {data.getFullYear()}</p>
        </footer>
    )
}