import React from 'react';
import './PlayerDetails.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faPlusSquare } from '@fortawesome/free-solid-svg-icons'

const PlayerDetails = (props) => {
    const {name, salary, image} = props.player;

    return (
        <div className="player">
            <div>
                <h2>Name: {name}</h2>
                <img src={image} alt=""/>
                <h4>Salary: {salary}</h4>
                <button 
                    className="main-btn"
                    className="btn btn-success"
                    onClick = {() => props.handleAddPlayer(props.player)}
                ><FontAwesomeIcon icon={faPlusSquare} /> Add for Club</button>
            </div>
            
        </div>
    );
};

export default PlayerDetails;