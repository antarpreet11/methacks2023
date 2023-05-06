import { io } from 'socket.io-client';

class AzureSpeechToText {
  constructor() {
    this.socket = null;
    this.transcription = '';
  }

  connect() {
    this.socket = io('http://localhost:8000');
    this.socket.on('connect', () => {
      this.socket.emit('subscribe', { channel: 'transcription' });
    });

    this.socket.on('transcription', (data) => {
      this.transcription = data.transcription;
    });
  }

  startTranscription() {
    if (this.socket) {
      this.socket.emit('message', { channel: 'transcription', message: 'start_transcription' });
    }
  }

  stopTranscription() {
    if (this.socket) {
      this.socket.disconnect();
      this.socket = null;
    }
  }
}

export default AzureSpeechToText;
