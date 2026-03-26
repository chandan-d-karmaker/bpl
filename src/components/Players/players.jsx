import React, { use } from 'react';
import Player from './Player';

const Players = ({ players }) => {

    const playersData = use(players);

    console.log(playersData);
    return (

        <div className='w-4/5 mx-auto'>
            <div className='flex justify-between'>
                <h2 className='mb-10 text-2xl font-bold'>Available Players</h2>
                <div className='rounded-2xl'>
                    <button className='btn rounded-r-none rounded-l-3xl bg-amber-300'>Available</button>
                    <button className='btn rounded-l-none rounded-r-3xl font-normal'>Selected (<span></span>)</button>
                </div>
            </div>
            <div className='grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3  gap-4'>
                {playersData.map(player => <Player key={player.id} player={player} />)}
            </div>
        </div>
    );
};

export default Players;