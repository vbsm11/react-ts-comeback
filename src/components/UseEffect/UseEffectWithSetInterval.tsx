import React, {useEffect, useState} from 'react';
import {clearInterval} from 'timers';


export const UseEffectWithSetInterval = () => {

    console.log('SetTimeOut Example')

    const [counter, setCounter] = useState(1)

    useEffect(() => {

        const interval = setInterval(() => {
            console.log('tick ' + counter)
            setCounter(state => state + 1)
        }, 1000)

        return () => {
            clearInterval(interval)
        }
    }, [])

    return (
        <>
            Hello, counter: {counter}

        </>
    )
}