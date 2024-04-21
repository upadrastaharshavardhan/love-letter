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
		As I sit down to write this letter, I'm overwhelmed with gratitude for having you in my life. You are the shining light that brightens my days, the warmth that fills my heart, and the love that completes me in every way.

Thank you, my love, for everything you do. Your unwavering support, your boundless kindness, and your endless patience mean more to me than words can express. You have stood by my side through thick and thin, offering comfort and strength in times of need. Your love has been my rock, steady and true, guiding me through life's challenges with grace and resilience.

But above all, I want to thank you for simply existing. Your presence in my life is a gift beyond measure. From the moment our paths crossed, I knew that you were something special, something extraordinary. You bring joy and laughter wherever you go, filling every moment with warmth and affection.

You are my partner, my confidante, and my best friend. I cherish every moment we share together, from the simplest of pleasures to the grandest of adventures. With you by my side, life is an endless journey of love and discovery, and I am grateful for every step of the way.

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
