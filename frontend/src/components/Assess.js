import React from 'react'
import SpeechToText from './SpeechToText';
import "./Assess.css";

import mic from './mic.png'

const Assess = () => {
    const timeLimit = 180000; // 3 minutes
    return (
        <div>
            <p className="prompt">Answer the question</p>
            <SpeechToText timeLimit={timeLimit} />
        </div>
    )
}

export default Assess