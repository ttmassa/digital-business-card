import React from 'react'
import mailIcon from '../images/mail-icon.png'
import githubIcon from '../images/github-icon.png'
import linkedinIcon from '../images/linkedin-icon.png'
import mapsIcon from '../images/google_maps-icon.png'

export default function Links() {
    return (
        <article>
            <ul className='links--list'>
                <li>
                    <a href='mailto:timothee.massa.perso@gmail.com' target='_blank' rel="noreferrer"> 
                        <div className='links--details-icons'> <img className='links--mail-icon' src={mailIcon} alt='mail icon'/></div>
                        <div className='links--details'>timothee.massa.perso@gmail.com</div>
                    </a>
                </li>
                <li>
                    <a href='https://github.com/ttmassa' target='_blank' rel="noreferrer">
                        <div className='links--details-icons'><img className='links--github-icon' src={githubIcon} alt="Github's icon"/></div>
                        <div className='links--details'>My github account</div>
                    </a>
                </li>
                <li>
                    <a href='https://www.linkedin.com/in/timoth%C3%A9e-massa-88bbbb278/' target='_blank' rel="noreferrer">
                        <div className='links--details-icons'><img className='links--linkedin-icon' src={linkedinIcon} alt="Linkedin's icon"/></div>
                        <div className='links--details'>Connect with me on Linkedln</div>
                    </a>
                </li>
                <li>
                    <a href='https://www.google.com/maps?rlz=1C1VDKB_frFR1019FR1019&output=search&q=paris&source=lnms&entry=mc&sa=X&ved=2ahUKEwjN55jA8K6AAxVMRqQEHRNDBV0Q0pQJegQICxAB' rel="noreferrer">
                        <div className='links--details-icons'><img className='links--maps-icon' src={mapsIcon} alt="Google maps' icon"/></div>
                        <div className='links--details'>Paris</div>
                    </a>
                </li>
            </ul>
        </article>
    )
}