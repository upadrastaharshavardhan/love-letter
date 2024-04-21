import React, { useState, useRef } from 'react';
import './LoveLetter.css';
import audioFile from './kushi.mp3';

const LoveLetter = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isFullSize, setIsFullSize] = useState(false);
  const audioRef = useRef(null);

  const handleOpenLetter = () => {
    setIsOpen(true);
    setTimeout(() => {
      setIsFullSize(true);
      // Ensuring audio play is directly a result of this user interaction
      if (audioRef.current) {
        audioRef.current.play()
          .then(() => console.log("Playback succeeded"))
          .catch(e => console.error("Playback failed:", e));
      }
    }, 800);
  };

  const handleCloseLetter = () => {
    setIsFullSize(false);
    setTimeout(() => {
      if (audioRef.current) {
        audioRef.current.pause();
      }
      setIsOpen(false);
    }, 800);
  };

  return (
    <div className={`envelope ${isOpen ? 'open' : ''}`} onClick={!isFullSize ? handleOpenLetter : handleCloseLetter}>
      <div className="flap"></div>
      <div className="body"></div>
      <div className={`letter ${isFullSize ? 'fullSize' : ''}`}>
        mah dear kannamma🖤,<br />
		In the vast expanse of my life, your presence stands tall, filling every corner with love and light. Each day, I am grateful for the grandeur of your love and the beauty of your existence. You are the anchor of my soul, and with you, every moment feels monumental and profound.
So, my darling Kannamma, thank you for being you. Thank you for your love, your laughter, and your beautiful soul. You are the love of my life, my heart, and my home. I am blessed beyond measure to call you my wife.
        never have i been so blessed as to fall in love with someone as wonderful as you...<br />i loveeee youuuu :)<br />
        always yours,<br />
        @kanna
      </div>
      <audio ref={audioRef} src={audioFile} onError={(e) => console.error('Audio error:', e.message)} />
    </div>
  );
};

export default LoveLetter;
