import React, { useEffect, useState } from 'react';
import playerData from '../../Data/Data.json'
import Club from '../Club/Club';
import './Player.css'
import PlayerDetails from './PlayerDetails/PlayerDetails';

const Player = () => {
    const [players, setPlayers] = useState([]);
    const [man, setMan] = useState([]);

    useEffect(() =>{
            setPlayers(playerData);
      }, [])

    const handleAddPlayer = (player) => {
        const newMan = [...man, player];
        setMan(newMan);
    }

     return (
        <div className="team-container">
            <div className="player-part">
                {
                    players.map(player => <PlayerDetails
                        key={player.id}
                        handleAddPlayer = {handleAddPlayer}
                        player = {player}
                        ></PlayerDetails>)
                }
            </div>
            <div className="selected-club">
                <Club man={man}></Club>
            </div>
          
        </div>
    );
};

export default Player;