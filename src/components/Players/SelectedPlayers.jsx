import React from 'react';
import deleteIcon from '../../assets/delete.svg';


const SelectedPlayers = ({ selectedPlayers, setSelectedPlayers, coin, setCoin }) => {

    const handleDeleteSelectedPlayer = (player) => {
        const filteredPlayers = selectedPlayers.filter(selectedPlayer => selectedPlayer.playerName != player.playerName);
        setSelectedPlayers(filteredPlayers);
        setCoin(coin+player.price);
    }
    return (
        <div className='space-y-4'>
            {
               selectedPlayers.length === 0 ? 
                <div className='flex flex-col items-center justify-center p-10 bg-base-200 rounded-2xl'>
                    <h2 className='text-2xl text-gray-400 font-bold opacity-75'>No players selected yet</h2>
                    <p className='text-xl text-gray-400 opacity-50'>Please go to available section</p>
                </div>
               : selectedPlayers.map(player =>
                    <div className='flex justify-between items-center p-4 rounded-2xl border border-gray-300'>
                        <div className='flex gap-5 justify-center items-center'>
                            <div>
                                <img className='w-20 h-20 rounded-xl' src={player.playerImage} alt="" />
                            </div>
                            <div className='flex flex-col items-start justify-center space-x-4'>
                                <h3 className='text-xl font-semibold'>{player.playerName}</h3>
                                <h3>{player.playerType}</h3>
                            </div>
                        </div>
                        <button className='btn' onClick={() => handleDeleteSelectedPlayer(player)}><img src={deleteIcon} alt="" /></button>
                    </div>
                )
            }

        </div>
    );
};

export default SelectedPlayers;