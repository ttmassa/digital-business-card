import React from 'react'
import reacTeamLogo from '../images/reacTeam-icon.svg'

export default function Header() {
    return (
        <header>
            <h1>ReacTeam</h1>
            <img src={reacTeamLogo} width={120}/>
            <hr/>
        </header> 
    );
}