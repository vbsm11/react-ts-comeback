import React, {useEffect, useState} from 'react';

type ClockObjectType = {
    hours: number
    minutes: number
    seconds: number
}

const init = (): ClockObjectType => {
    const a = new Date()
    return {
        hours: a.getHours(),
        minutes: a.getMinutes(),
        seconds: a.getSeconds()
    }
}

export const Clock = () => {


    const [clock, setClock] = useState(init)

    const setter = () => {
        const a = new Date()
        return {
            hours: a.getHours(),
            minutes: a.getMinutes(),
            seconds: a.getSeconds()
        }
    }


    useEffect(() => {
        setInterval(() => {
            setClock(setter)
        }, 1000)

    })

    return (
        <>
            {clock.hours}: {clock.minutes}: {clock.seconds}
        </>
    )
}