import React, {useEffect, useState} from 'react';


export const UseEffect = () => {

    const [counter, setCounter] = useState(1)

    useEffect(() => {
        console.log('UseEffect')

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