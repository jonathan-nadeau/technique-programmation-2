import './cardInfo.css';
import React from 'react';

const CardInfo = ({ value, timeLeft }) => {
  return (
    <div className='cardInfo'>
      <div>
        <img src={'images/icon-ethereum.svg'} alt='icon etherum' />
        <span className='eth'>{`${value} ETH`}</span>
      </div>
      <div>
        <img src={'images/icon-clock.svg'} alt='icon clock' />
        <span>{`${timeLeft} left`}</span>
      </div>
    </div>
  );
};

export default CardInfo;
