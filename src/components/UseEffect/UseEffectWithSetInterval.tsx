import React, {useEffect, useState} from 'react';


export const UseEffectWithSetInterval = () => {

    console.log('SetTimeOut Example')

    const [counter, setCounter] = useState(1)

    useEffect(() => {

        setInterval(() => {
            console.log('tick ' + counter)
            setCounter(state => state + 1)
        }, 1000)

    }, [])

    return (
        <>
            Hello, counter: {counter}

        </>
    )
}