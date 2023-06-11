import React, {useEffect, useState} from 'react';


export const ResetEffectExample = () => {

    const [counter, setCounter] = useState(1)

    console.log('component rendered with ' + counter)

    useEffect(() => {
        console.log('effect occured: ' + counter) // 2

        return () => {
            console.log('reset effect ' + counter) // 1
        }
    }, [counter])

    return (
        <>
            Hello, counter: {counter}
            <button onClick={() => {setCounter(counter +1)}}>+</button>
        </>
    )
}

