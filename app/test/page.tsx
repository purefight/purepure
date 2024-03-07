"use client";
import React, { useState, useEffect } from 'react';
import '../fpscalcurater/[serectgameid]/selection.css';

export default function Page() {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (counter === 65) {
        clearInterval(intervalId);
      } else {
        setCounter(prevCounter => prevCounter + 1);
      }
    }, 30);

    return () => clearInterval(intervalId);
  }, [counter]);

  return (
    <div className="predictions">
      <div className='square-white'>
        <div className='power'>
          <div className='skill'>
            <div className='outer'>
              <div className='inner'>
                <div id="number">
                  {counter}%
                </div>
              </div>
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="160px" height="160px">
              <defs>
                <linearGradient id="GradientColor">
                  <stop offset='0%' stopColor='#DA22FF' />
                  <stop offset='100%' stopColor='#9733EE' />
                </linearGradient>
              </defs>
              <circle cx="80" cy="80" r="70" strokeLinecap="round" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}
