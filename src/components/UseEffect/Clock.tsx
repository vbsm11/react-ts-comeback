import React, {useEffect, useState} from 'react';
import {clearInterval} from 'timers';

const add0 = (time: number) => time < 10? '0' + time: time

export const Clock = () => {

    const [clock, setClock] = useState(new Date())

    useEffect(() => {
        const intervalId = setInterval(() => {
            console.log('tick')
            setClock(new Date())
        }, 1000)

        return () => {
            clearInterval(intervalId)
        }
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