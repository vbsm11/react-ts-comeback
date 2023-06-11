import React from 'react';
import s from './Clock.module.css';
import {Hand} from './Hand';
import {ClockModePropsType} from './Clock';

export const AnalogClock: React.FC<ClockModePropsType> = ({clock}) => {

    const hours = clock.getHours() * 30
    const minutes = clock.getMinutes() * 6
    const seconds = clock.getSeconds() * 6

    return (
        <div className={s.analog}>
            <Hand value={hours} parentClass={`${s.handParent} ${s.hourHand}`} childClass={`${s.handChild} ${s.hourHandChild}`} />
            <Hand value={minutes} parentClass={`${s.handParent} ${s.minuteHand}`} childClass={`${s.handChild} ${s.minuteHandChild}`}/>
            <Hand value={seconds} parentClass={`${s.handParent} ${s.secondHand}`} childClass={`${s.handChild} ${s.secondHandChild}`}/>
        </div>
    )
}