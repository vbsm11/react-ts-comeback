import React, {useEffect, useState} from 'react';


export const UseEffect = () => {

    console.log('UseEffect Component')

    const [fake, setFake] = useState(1)
    const [counter, setCounter] = useState(1)

    useEffect(() => {
        console.log('UseEffect')
        debugger
        document.title = counter.toString()
        // api.getUsers().then('')
        // setInterval
        // indexedDB
        // document.getElementById()
    }, [counter])

    return (
        <>
            Hello {counter}
            <button onClick={() => {
                // setCounter(counter + 1)
                setFake(fake + 1)
            }}>+
            </button>
        </>
    )
}