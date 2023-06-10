import React, {useEffect, useState} from 'react';
import {clearInterval} from 'timers';
import '../../App.css';

const add0 = (time: number) => time < 10 ? '0' + time : time

export const Clock = () => {

    const [clock, setClock] = useState(new Date())
    const [analog, setAnalog] = useState(false)
    const type = analog ? 'digital' : 'analog'
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


    const hours = add0(clock.getHours())
    const minutes = add0(clock.getMinutes())
    const seconds = add0(clock.getSeconds())

    const hoursForAnalogClock = clock.getHours() * 30
    const minutesForAnalogClock = clock.getMinutes() * 6
    const secondsForAnalogClock = clock.getSeconds() * 6

    return (
        <>
            {analog
                ? <div className="clock">
                    <div className="hour-hand"
                         style={{transform: 'rotate(' + hoursForAnalogClock + 'deg)'}}
                    >
                        <div className="hour-hand-child"></div>
                    </div>
                    <div className="minute-hand"
                         style={{transform: 'rotate(' + minutesForAnalogClock + 'deg)'}}
                    >
                        <div className="minute-hand-child"></div>
                    </div>
                    <div className="second-hand"
                         style={{transform: 'rotate(' + secondsForAnalogClock + 'deg)'}}
                    >
                        <div className="second-hand-child"></div>
                    </div>
                </div>
                : <div className='digital'>
                    {hours}: {minutes}: {seconds}
                </div>
            }
            <button
                onClick={onChangeHandler}
                className='button'
            >
                to {type} clock
            </button>
        </>
    )
}