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

export const ResetEffectExample2 = () => {

    const [text, setText] = useState('')

    console.log('component rendered with ' + text)

    useEffect(() => {

        const handler = (e: KeyboardEvent) => {
            console.log(e.key)
            setText(text + e.key)
        }
        window.addEventListener('keypress', handler)

        return () => {
            window.removeEventListener('keypress', handler)
        }
    }, [text])

    return (
        <div>
            Typed text: {text}
        </div>
    )
}

