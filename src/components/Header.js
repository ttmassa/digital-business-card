import React from 'react'
import '../style.css'
import reacTeamLogo from '../images/reacTeam-icon.svg'

export default function Header() {
    return (
        <header>
            <div className='header--logo'>
                <h1 className='header--title'>ReacTeam</h1>
                <img src={reacTeamLogo} width={120} alt="ReacTeam's icon"/>
            </div>
            
            <hr />
        </header> 
    );
}