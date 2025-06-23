import React, { useState } from 'react';
import Left from '../home/Leftpart/Left';
import Right from '../home/Rightpart/Right';

const HomePage = () => {
  const [showLeft, setShowLeft] = useState(false);

  const hideLeft = () => {
    if (showLeft && window.innerWidth < 1024) {
      setShowLeft(false);
    }
  };

  return (
    <div className="h-screen flex">
      <Left showLeft={showLeft} />
      <Right showLeft={showLeft} toggleLeft={() => setShowLeft(prev => !prev)} hideLeft={hideLeft} />
    </div>
  );
};

export default HomePage;
