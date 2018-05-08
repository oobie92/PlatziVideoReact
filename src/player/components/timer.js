import React from 'react';
import './timer.css';

const leftPad = n => `0${n}`.substr(-2)

const formatTime = secs => `${leftPad(~~ (secs / 60))} : ${leftPad(~~ (secs % 60))}`

const Timer = (props) => (
    <div className="Timer">
        <p>
            <span>{formatTime(props.currentTime)} / {formatTime(props.duration)} </span>
        </p>
    </div>
)

export default Timer;