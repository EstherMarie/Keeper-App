import React from 'react';

let data = new Date()

export function Footer() {
    return (
        <footer>
            <p>Copyright ⓒ {data.getFullYear()}</p>
        </footer>
    )
}