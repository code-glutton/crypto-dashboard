import React from 'react';
import './main.css'

function Main(){
    return(
        <div className='mainBody'>
            <div className='mainContainer'>
                <div className='mainDisplay mainDisplayItems one'>
                    1
                </div>
                <div className='mainHistogram mainDisplayItems two'>
                    2
                </div>
                <div className='mainTable mainDisplayItems three'>
                    3
                </div>
                <div className='mainFacts mainDisplayItems four'>
                    4
                </div>
            </div>
        </div>
    )
}

export default Main;