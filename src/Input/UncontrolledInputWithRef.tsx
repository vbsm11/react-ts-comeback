import React, {useRef, useState} from 'react'

export const UncontrolledInputWithRef = () => {

    const [value, setValue] = useState<string>('')

    const inputRef = useRef<HTMLInputElement>(null)

    const onSaveHandler = () => {
        const el = inputRef.current as HTMLInputElement
        setValue(el.value)
    }

    return (
        <div>
            <input ref={inputRef}/>
            <button onClick={onSaveHandler}>
                save
            </button>
             actual value: {value}
        </div>
    )
}