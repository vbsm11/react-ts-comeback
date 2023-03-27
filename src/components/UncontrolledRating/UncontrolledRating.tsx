import React, {useState} from 'react';

type ValuesType = 0 | 1 | 2 | 3 | 4 | 5

export function UncontrolledRating() {
    console.log('UncontrolledRating rendering')

    const [value, setValue] = useState<ValuesType>(0)

    return (
        <div>
            <Star selected={value > 0} val={1} setValue={setValue}/>
            <Star selected={value > 1} val={2} setValue={setValue}/>
            <Star selected={value > 2} val={3} setValue={setValue}/>
            <Star selected={value > 3} val={4} setValue={setValue}/>
            <Star selected={value > 4} val={5} setValue={setValue}/>
        </div>
    )
}

type StarPropsType = {
    selected: boolean,
    setValue: (value: ValuesType) => void
    val: ValuesType
}

function Star(props: StarPropsType) {
    return (
        <span onClick={() => props.setValue(props.val)}>{props.selected? <b>star</b> : 'star'} </span>
    )
}