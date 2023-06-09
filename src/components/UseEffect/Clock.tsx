import React, {useEffect, useState} from 'react';

const add0 = (time: number) => time < 10? '0' + time: time

export const Clock = () => {

    const [clock, setClock] = useState(new Date())

    useEffect(() => {
        setInterval(() => {
            setClock(new Date())
        }, 1000)
    }, [])


    const hours = add0(clock.getHours())
    const minutes = add0(clock.getMinutes())
    const seconds = add0(clock.getSeconds())

    return (
        <>
            {hours}: {minutes}: {seconds}
        </>
    )
}