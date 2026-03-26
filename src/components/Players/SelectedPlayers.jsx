import React from 'react';
import deleteIcon from '../../assets/delete.svg';


const SelectedPlayers = ({ selectedPlayers }) => {
    // console.log("selected Players", selectedPlayers);
    return (
        <div className='space-y-4'>
            {
                selectedPlayers.map(player =>
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
                        <button className='btn'><img src={deleteIcon} alt="" /></button>
                    </div>
                )
            }

        </div>
    );
};

export default SelectedPlayers;