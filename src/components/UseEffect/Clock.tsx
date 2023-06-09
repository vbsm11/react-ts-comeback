import React, {useEffect, useState} from 'react';


export const Clock = () => {

    const [clock, setClock] = useState(new Date())

    useEffect(() => {
        setInterval(() => {
            setClock(new Date())
        }, 1000)
    }, [])


    return (
        <>
            {clock.getHours()}: {clock.getMinutes()}: {clock.getSeconds()}
        </>
    )
}