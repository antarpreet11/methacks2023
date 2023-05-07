import React from 'react'
import SpeechToText from './SpeechToText';
import "./Assess.css";

import mic from './mic.png'

const Assess = () => {
    const timeLimit = 180000; // 3 minutes
    const tempLimit = 5000; // 5 seconds    

    return (
        <div>
            <p className="prompt">Answer the question</p>
            <SpeechToText timeLimit={tempLimit} />
        </div>
    )
}

export default Assess