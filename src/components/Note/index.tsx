import React from "react";
import './styles.scss'

interface NoteProps {
    title: string,
    content: string
}

export function Note({title, content}: NoteProps) {
    return (
        <div className="note">
            <h2>{title}</h2>
            <p>{content}</p>
        </div>
    )
}