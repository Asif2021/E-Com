'use client'
import { createContext, useContext, useMemo, useState } from "react"

const defaultContextValue = {
    isOpen: false,
    setIsOpen: () => {},
  };
export const RightNavContext = createContext(defaultContextValue);

export function RightNavProvider({children}){
    const [isOpen, setIsOpen] = useState(false);

    const Value = useMemo(()=>({isOpen, setIsOpen}), [isOpen])

    return(
        <RightNavContext.Provider value={Value}>
            {children}
        </RightNavContext.Provider>
    )
} 

export function useRightNav(){
    const  RightNav = useContext(RightNavContext)
    return RightNav
}