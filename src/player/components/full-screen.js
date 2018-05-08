import React from 'react';
import Features from '../../icons/components/features';
import './full-screen.css';

const FullScreen = props => (
    <div 
        className="FullScreen"
        onClick={props.handleFullScreenClick}
    >
        <Features.FullScreen 
            size={25}
            color="white"
        />
    </div>
)

export default FullScreen
