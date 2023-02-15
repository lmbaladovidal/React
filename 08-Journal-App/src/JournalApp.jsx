import React from 'react'
import { AppRouter } from './router/AppRouter'
import { AppTheme } from './theme'

export const JournalApp = () => {
    return (
        <AppTheme>
            <h1>HolaMundo</h1>
            <AppRouter/>
        </AppTheme>
    )
}
