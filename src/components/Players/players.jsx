import React, { use } from 'react';

const Players = ({ players }) => {

    const playersData = use(players);

    console.log(playersData);
    return (
        <div>
            
        </div>
    );
};

export default Players;