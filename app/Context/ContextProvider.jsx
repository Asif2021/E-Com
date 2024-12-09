'use client'
import { useState } from "react"
import {countContext} from './Context'

export function ContextProvider({children}){
    const [count, setCount]= useState(0);

    return(
        <countContext.Provider value={{count, setCount}}>
            {children}
        </countContext.Provider>
    )
}