import React from 'react';
import Features from '../../icons/components/features';
import './play-pause.css'; 

const PlayPause = (props) => (
    <div className="PlayPause">
        {
            props.pause ?
                <button
                    onClick={props.handleClick}
                >
                    <Features.Play 
                        size={25}
                        color={'white'}
                    />
                </button>
            :
                <button
                    onClick={props.handleClick}
                >
                    <Features.Pause 
                        size={25}
                        color={'white'}
                    />
                </button>
        }
    </div>
)

export default PlayPause;

