import React from 'react'
import SpeechToText from './SpeechToText';

const Problems = () => {
  const timeLimit = 180000; // 3 minutes
  return (
    <div>
        <SpeechToText timeLimit={timeLimit} />
    </div>
  )
}

export default Problems