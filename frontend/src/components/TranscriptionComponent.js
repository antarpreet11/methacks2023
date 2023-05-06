import React, { useState, useEffect } from 'react';
import AzureSpeechToText from '../utils/AzureSpeechToText';

function TranscriptionComponent() {
  const [transcription, setTranscription] = useState('');

  useEffect(() => {
    const azureSTT = new AzureSpeechToText();
    azureSTT.connect();

    const startTranscription = () => {
      azureSTT.startTranscription((transcript) => {
        setTranscription(transcript);
      });
    };

    const stopTranscription = () => {
      azureSTT.stopTranscription();
    };

    startTranscription();

    return () => {
      stopTranscription();
    };
  }, []);

  return (
    <div>
      <h1>Speech-to-Text Transcription</h1>
      <p>{transcription}</p>
    </div>
  );
}

export default TranscriptionComponent;
