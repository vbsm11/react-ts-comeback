import React, {useEffect, useState} from 'react';
import {clearInterval} from 'timers';
import '../../../App.css';
import s from './Clock.module.css'
import {AnalogClock} from './AnalogClock';
import {DigitalClock} from './DigitalClock';

export type ClockModePropsType = {
    clock: Date
}


export const Clock = () => {

    const [clock, setClock] = useState(new Date())
    const [analog, setAnalog] = useState(false)

    const type = analog ? 'digital' : 'analog'

    const mode = analog ? <AnalogClock clock={clock}/> : <DigitalClock clock={clock}/>

    const onChangeHandler = () => {
        setAnalog(!analog)
    }

    useEffect(() => {
        const intervalId = setInterval(() => {
            console.log('tick')
            setClock(new Date())
        }, 1000)

        return () => {
            clearInterval(intervalId)
        }
    }, [])


    return (
        <>
            {mode}
            <button
                onClick={onChangeHandler}
                className={s.button}
            >
                to {type} clock
            </button>
        </>
    )
}






