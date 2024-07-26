import { useState, useEffect } from "react";

const Timer = props => {

    // const [formatted, setFormatted] = useState("0:0")

    const [count, setCount] = useState(0)

    useEffect(() => {
        setInterval(tick,1000)
    } ,[])

    const tick = () => {
        setCount(prevState => prevState+1)
    }

    let seconds = count % 60;
    if (seconds.toString().length === 1) {
        seconds = "0" + seconds;

    }
    let minutes = Math.trunc(count / 60)

    return (
        <div className="timer">
            <h1>{`${minutes}:${seconds}`}</h1>
        </div>

    )

}

export default Timer;
