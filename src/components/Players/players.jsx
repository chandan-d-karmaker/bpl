import React, { use, useState } from 'react';
import Player from './Player';
import SelectedPlayers from './SelectedPlayers';

const Players = ({ players, setCoin, coin }) => {

    const playersData = use(players);
    const [actvBtn, setActvBtn] = useState('available');

    console.log(playersData);
    return (

        <div className='w-4/5 mx-auto'>
            <div className='flex justify-between'>
                {actvBtn === "available" && (
                    <h2 className='mb-10 text-2xl font-bold'>Available Players</h2>
                )}
                {actvBtn === "selected" && (
                    <h2 className='mb-10 text-2xl font-bold'>Selected Players</h2>
                )}
                <div className='rounded-2xl'>
                    <button className={`btn rounded-r-none rounded-l-3xl ${actvBtn === "available" ? "bg-amber-300 font-bold" : "font-normal"}`} onClick={() => setActvBtn('available')}>
                        Available
                    </button>
                    <button className={`btn rounded-l-none rounded-r-3xl ${actvBtn === "selected" ? "bg-amber-300 font-bold" : "font-normal"}`} onClick={() => setActvBtn('selected')}>
                        Selected (<span></span>)
                    </button>
                </div>
            </div>
            {actvBtn === "available" ?  (
                <div className='grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3  gap-4'>
                    {playersData.map(player => <Player key={player.id} player={player} setCoin={setCoin} coin={coin} />)}
                </div>
            ) : <SelectedPlayers />}
            
        </div>
    );
};

export default Players;