import React, { useEffect, useState } from 'react';
import moment from 'moment';


function Timer() {

    const [timer, setTimer] = useState(moment().format("DD/MM/YYYY - hh:mm:ss A"))

    useEffect(() => {
        setTimerFunction()
    }, [timer])


    const setTimerFunction = () => {
        setTimeout(() => {
            setTimer(moment().format("DD/MM/YYYY - hh:mm:ss A"))
        }, 1000);
    }
    return (
        <div>{timer}</div>
    )
}

export default Timer