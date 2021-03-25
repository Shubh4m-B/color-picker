import React from 'react';
import './Styles/Page.css'

export default function Page({ children }) {
    return (
        <section className="page">
            {children}
        </section>
    )
}
