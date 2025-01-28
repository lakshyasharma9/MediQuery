// src/components/ChatInterface/ChatInterface.jsx
import { useState } from 'react';
import './ChatInterface.css';

const ChatInterface = () => {
  const [isListening, setIsListening] = useState(false);

  const startSpeechToText = async () => {
    try {
      const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
      if (!SpeechRecognition) {
        alert("Speech recognition is not supported in this browser. Please use Chrome or Edge.");
        return;
      }

      const recognition = new SpeechRecognition();
      recognition.continuous = false;
      recognition.interimResults = true;
      recognition.lang = 'en-US';

      recognition.onstart = () => {
        setIsListening(true);
      };

      recognition.onresult = (event) => {
        const transcript = event.results[0][0].transcript;
        
        // Get the iframe
        const chatIframe = document.querySelector('.chatbot-iframe');
        if (!chatIframe) return;

        // Access iframe content
        const iframeDocument = chatIframe.contentDocument || chatIframe.contentWindow.document;
        
        // Find the input field (trying multiple possible selectors)
        const inputField = iframeDocument.querySelector('input[type="text"]') || 
                         iframeDocument.querySelector('textarea') ||
                         iframeDocument.querySelector('.message-input');

        if (inputField) {
          // Set the value
          inputField.value = transcript;
          
          // Trigger input event
          const inputEvent = new Event('input', { bubbles: true });
          inputField.dispatchEvent(inputEvent);

          // If this is the final result, find and click the send button
          if (event.results[0].isFinal) {
            // Find the send button (trying multiple possible selectors)
            const sendButton = iframeDocument.querySelector('button[type="submit"]') ||
                             iframeDocument.querySelector('button.send-button') ||
                             iframeDocument.querySelector('form button');
                             
            if (sendButton) {
              setTimeout(() => {
                sendButton.click();
                recognition.stop();
              }, 500);
            }
          }
        }
      };

      recognition.onerror = (event) => {
        console.error('Speech recognition error:', event.error);
        setIsListening(false);
      };

      recognition.onend = () => {
        setIsListening(false);
      };

      await recognition.start();

    } catch (error) {
      console.error('Speech recognition error:', error);
      setIsListening(false);
    }
  };

  return (
    <div className="chat-interface">
      <div className="chat-header">
        <h2>Medical Assistant</h2>
        <div className="header-controls">
          <span className="status-indicator">Online</span>
          <button 
            className={`voice-button ${isListening ? 'listening' : ''}`}
            onClick={startSpeechToText}
            title={isListening ? 'Listening...' : 'Click to speak'}
          >
            🎤
          </button>
        </div>
      </div>

      <div className="chat-iframe-container">
        <iframe
          src="https://www.chatbase.co/chatbot-iframe/FLESxBL43VpAN-nVg8aG2"
          title="Medical Chatbot"
          className="chatbot-iframe"
          frameBorder="0"
          allow="microphone"
          sandbox="allow-same-origin allow-scripts allow-forms allow-popups"
        />
      </div>
    </div>
  );
};

export default ChatInterface;