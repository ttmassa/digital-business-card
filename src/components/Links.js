import React from 'react'

export default function Links() {
    return (
        <article>
            <ul className='links--list'>
                <li>
                    <a href='mailto:timothee.massa.perso@gmail.com' target='_blank' rel="noreferrer"> 
                        <div className='links--details-icons'></div>
                        <div className='links--details'>timothee.massa.perso@gmail.com</div>
                    </a>
                </li>
                <li>
                    <a href='https://github.com/ttmassa' target='_blank' rel="noreferrer">
                        <div className='links--details-icons'></div>
                        <div className='links--details'>My github account</div>
                    </a>
                </li>
                <li>
                    <a href='https://www.linkedin.com/in/timoth%C3%A9e-massa-88bbbb278/' target='_blank' rel="noreferrer">
                        <div className='links--details-icons'></div>
                        <div className='links--details'>Connect with me on Linkedln</div>
                    </a>
                </li>
                <li>
                    <a href='https://www.google.com/maps?rlz=1C1VDKB_frFR1019FR1019&output=search&q=paris&source=lnms&entry=mc&sa=X&ved=2ahUKEwjN55jA8K6AAxVMRqQEHRNDBV0Q0pQJegQICxAB' rel="noreferrer">
                        <div className='links--details-icons'></div>
                        <div className='links--details'>Paris</div>
                    </a>
                </li>
            </ul>
        </article>
    )
}