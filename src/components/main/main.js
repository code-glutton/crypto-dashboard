import React from 'react';
import './main.css'

function Main(){
    return(
        <div className='mainBody'>
            <div className='mainContainer'>
                <div className='mainDisplay mainDisplayItems one'>
                    <div className='headersContainer'>
                        <div className='headers'>
                            <p>header</p>
                        </div>
                        <div className='forms'>
                            <div className='formsItem'>
                                <select id="cars">
                                    <option value="volvo">Volvo</option>
                                    <option value="saab">Saab</option>
                                    <option value="opel">Opel</option>
                                    <option value="audi">Audi</option>
                                </select>
                            </div>
                            <div className='formsItem'>
                                <select id="cars">
                                    <option value="volvo">Volvo</option>
                                    <option value="saab">Saab</option>
                                    <option value="opel">Opel</option>
                                    <option value="audi">Audi</option>
                                </select>
                            </div>
                            <div className='formsItem'>
                                <select id="cars">
                                    <option value="volvo">Volvo</option>
                                    <option value="saab">Saab</option>
                                    <option value="opel">Opel</option>
                                    <option value="audi">Audi</option>
                                </select>
                            </div>
                        </div>    
                    </div>
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