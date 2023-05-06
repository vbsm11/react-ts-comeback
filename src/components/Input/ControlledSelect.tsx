import React, {ChangeEvent, useState} from 'react'

export const ControlledSelect = () => {
    const [parentValue, setParentValue] = useState<string | undefined>('3')

    const onChangeHandler = (e: ChangeEvent<HTMLSelectElement>) => {
        setParentValue(e.currentTarget.value)
    }


    return (
        <select
            value={parentValue}
            onChange={onChangeHandler}
        >
            <option>none</option>
            <option value="1">Seltso</option>
            <option value="2">Bryansk</option>
            <option value="3">Moscow</option>
        </select>
    )
}