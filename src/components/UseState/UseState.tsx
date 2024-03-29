import React, {useMemo, useState} from 'react';

const generateData = (): number => {
    console.log('generateData')
    // difficult counting
    return 459048593045930
}

export const UseState = () => {
    console.log('UseState')

    // const initValue = useMemo(generateData, [])

    const [counter, setCounter] = useState<number>(generateData)

    const changer = (state: number) => {
      return state + 1
    }

    return (
        <>
            <button onClick={() => {
                setCounter(changer)
            }}>+
            </button>
            {counter}
        </>
    )
}
