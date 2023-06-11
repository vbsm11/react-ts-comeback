import React, {useEffect, useState} from 'react';


export const UseEffectWithSetTimeOut = () => {

    console.log('SetTimeOut Example')

    const [fake, setFake] = useState(1)
    const [counter, setCounter] = useState(1)

    useEffect(() => {

        const timeout = setTimeout(() => {
            console.log('setTimeout')
            document.title = (counter.toString())
        }, 3000)

        return () => {
            clearTimeout(timeout)
        }
    }, [counter])

    return (
        <>
            Hello {fake}, {counter}
            <button onClick={() => {
                setFake(fake + 1)
            }}>fake +
            </button>
            <button onClick={() => {
                setCounter(counter + 1)
            }}>counter +
            </button>
        </>
    )
}