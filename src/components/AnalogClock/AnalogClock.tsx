import React, {useEffect, useState} from 'react';
import s from './AnalogClock.module.css'

const AnalogClock = () => {
    const [date, setDate] = useState(new Date)

    useEffect(() => {
        const intervalId = setInterval(() => {
            setDate(new Date)
        }, 1000)
        return () => {
            clearInterval(intervalId)
        }
    }, [date])

    const secondsStyle = {
        transform: `rotateZ(${date.getSeconds() * 6}deg)`
    };
    const minutesStyle = {
        transform: `rotateZ(${date.getMinutes() * 6}deg)`
    };
    const hoursStyle = {
        transform: `rotateZ(${date.getHours() * 30 + date.getMinutes() * 6/ 12}deg)`
    };

    return (
        <div className={s.clock}>
            <div className={s.hour}>
                <div className={s.hr} style={hoursStyle}></div>
            </div>
            <div className={s.min}>
                <div className={s.mn} style={minutesStyle}></div>
            </div>
            <div className={s.sec}>
                <div className={s.sc} style={secondsStyle}></div>
            </div>
        </div>
    );
};

export default AnalogClock;