import React, { useEffect, useState } from 'react';
import SpeechRecognitionService from '../utils/SpeechRecognitionService';
import "./Assess.css";

import mic from './mic.png'

const SpeechToText = ({ timeLimit }) => {
  const [liveText, setLiveText] = useState('');
  const [isRecording, setIsRecording] = useState(true);
  const [finalText, setFinalText] = useState('');

  useEffect(() => {
    const speechRecognition = new SpeechRecognitionService();

    const handleResult = (accumulatedText) => {
      setLiveText((prevText) => prevText + ' ' + accumulatedText);
    };

    speechRecognition.setOnResultCallback(handleResult);

    if (isRecording) {
      speechRecognition.startRecording(timeLimit);
    }

    return () => {
      const recordedText = speechRecognition.getFinalText();
      setFinalText(recordedText);
      speechRecognition.stopRecording();
    };
  }, [timeLimit, isRecording]);

  const handleStopRecording = () => {
    setIsRecording(false);
  };

  return (
    <div>
      <h2>Live Text:</h2>
      <p>{liveText}</p>
      {isRecording && <img class="mic" src={mic} alt="microphone"/> && <p><b>Recording in Progresss:</b> click mic to stop recording</p>}
      {!isRecording && <p>Recording stopped.</p>}
      {isRecording && <button onClick={handleStopRecording}><img class="mic" src={mic} alt="microphone"/></button>}
      {!isRecording && (
        <div class="result">
          <h2>Final Text:</h2>
          <p>{finalText}</p>
        </div>
      )}
    </div>
  );
};

export default SpeechToText;
