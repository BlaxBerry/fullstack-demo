import React from 'react'
import Header from '../Header/header'

export default function layout({ children }) {
    return (
        <>
            <Header />
            <div>
                {children}

                <div>Footer</div>
            </div>
        </>
    )
}
