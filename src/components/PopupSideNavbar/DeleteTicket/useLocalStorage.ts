import { useEffect, useState } from 'react';
export function useLocalStorage(key:string, initialValue: any) {
    const [valuetickets, setValueTickets] = useState(() => {
        const saved = window.localStorage.getItem(key)
        if (saved !== null) {
            return JSON.parse(saved)
        }
        return initialValue
    })

    useEffect(() => {
        window.localStorage.setItem(key, JSON.stringify(valuetickets))
    }, [valuetickets, setValueTickets])

    return [valuetickets, setValueTickets]

}

