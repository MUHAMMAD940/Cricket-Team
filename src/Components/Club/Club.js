import React from 'react';
import './Club.css'

const Club = (props) => {
    console.log(props);
    const man = props.man;
    const total = man.reduce((total, money) => total + money.salary, 0);


    return (
        <div className="final-club">
            <h1 className="mt-5">Final Team</h1>
            <h4>Selected Player: {man.length}</h4>
            {man.map(player => <h6>{player.name} - {player.salary}</h6>)}
            <p>Total Salary: {total}</p>
        </div>
    );
};

export default Club;