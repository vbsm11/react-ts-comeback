import React from 'react';
import s from './Clock.module.css';
import {ClockModePropsType} from './Clock';
const add0 = (time: number) => time < 10 ? '0' + time : time

export const DigitalClock: React.FC<ClockModePropsType> = ({clock}) => {

    const hours = add0(clock.getHours())
    const minutes = add0(clock.getMinutes())
    const seconds = add0(clock.getSeconds())

    return (
        <div className={s.digital}>
            {hours}: {minutes}: {seconds}
        </div>
    )

}