import React, {ChangeEvent, useState} from 'react'

export const ControlledInput = () => {
    const [parentValue, setParentValue] = useState('')

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setParentValue(e.currentTarget.value)
    }

    return (
        <input
            value={parentValue}
            onChange={onChangeHandler}
        />
    )
}