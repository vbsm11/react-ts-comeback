import React from 'react';

export type ValuesType = 0 | 1 | 2 | 3 | 4 | 5

type RatingPropsType = {
    value: ValuesType
    onClick: (value: ValuesType) => void
}

export function Rating(props: RatingPropsType) {
    console.log('UncontrolledRating rendering')

    return (
        <div>
            <Star selected={props.value > 0} val={1} onClick={props.onClick}/>
            <Star selected={props.value > 1} val={2} onClick={props.onClick}/>
            <Star selected={props.value > 2} val={3} onClick={props.onClick}/>
            <Star selected={props.value > 3} val={4} onClick={props.onClick}/>
            <Star selected={props.value > 4} val={5} onClick={props.onClick}/>
        </div>
    )
}

type StarPropsType = {
    selected: boolean
    val: ValuesType
    onClick: (value: ValuesType) => void
}

function Star(props: StarPropsType) {
    console.log('Star rendering')
    return (
        <span onClick={() => props.onClick(props.val)}>{props.selected ? <b>star</b> : 'star'} </span>
    )
}