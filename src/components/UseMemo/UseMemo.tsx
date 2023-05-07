import {useState} from 'react';

export const UseMemo = () => {

    const [a, setA] = useState<number>(0)
    const [b, setB] = useState<number>(0)

    return (
        <>
            <input value={a} onChange={(e) => setA(+e.currentTarget.value)}/>
            <input value={b} onChange={(e) => setB(+e.currentTarget.value)}/>
            <hr/>
            <div>
                Result for a: {a}
            </div>
            <div>
                Result for b: {b}
            </div>
        </>
    )
}