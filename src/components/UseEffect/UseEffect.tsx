import React, {useEffect, useState} from 'react';


export const UseEffect = () => {

    console.log('UseEffect Component')

    const [counter, setCounter] = useState(1)

    useEffect(() => {
        console.log('UseEffect')
        debugger
        document.title = counter.toString()
        // api.getUsers().then('')
        // setInterval
        // indexedDB
        // document.getElementById()
    })

    return (
        <>
            Hello {counter}
            <button onClick={() => {
                setCounter(counter + 1)
            }}>+
            </button>
        </>
    )
}