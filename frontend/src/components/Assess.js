import React from 'react'
import SpeechToText from './SpeechToText';

const Assess = () => {
    const timeLimit = 180000; // 3 minutes
    return (
        <div>
            <SpeechToText timeLimit={timeLimit} />
        </div>
    )
}

export default Assess