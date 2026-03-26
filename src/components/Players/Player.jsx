import React from 'react';
import user from '../../assets/user 1.svg';
import flag from '../../assets/flag.svg';

const Player = ({ player }) => {
    return (
        <div className='p-6 border border-gray-300 rounded-xl'>
            <img className='rounded-xl h-60 w-full mb-6' src={player.playerImage} alt={player.playerName} />
            <div className='flex gap-4 items-center mb-4'>
                <img className='w-7 h-7' src={user} alt="" />
                <h3 className='text-xl font-semibold'>{player.playerName}</h3>
            </div>

            <div className='flex justify-between'>
                <div className='flex gap-4 items-center'>
                    <img src={flag} alt="" />
                    <span className='text-[16px] text-[#131313] opacity-50'>{player.playerCountry}</span>
                </div>
                <div>
                    <button className='badge'>{player.playerType}</button>
                </div>
            </div>

            <hr className='mt-6 mb-6 border-gray-300' />
            <p className='font-bold mb-4'>Rating: {player.ratting}</p>
            <div className='font-semibold mb-4 space-y-3'>
                <p>Batting Style: {player.battingStyle}</p>
                <p>Bowling Style: {player.bowlingStyle}</p>
            </div>

            <div className='flex justify-between items-center'>
                <p className='font-semibold'>Price: ${player.price}</p>

                <button className='btn btn-outline btn-accent text-[#131313] text-sm font-normal hover:btn-info'>Choose Player</button>
            </div>

        </div>
    );
};

export default Player;