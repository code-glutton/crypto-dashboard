import React from 'react';
import './main.css';
import { VictoryChart,VictoryLine,VictoryBar} from 'victory';

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
                    <div className='chart'>
                    <VictoryChart minDomain={{ y: 0 }} width={900}>
                        <VictoryLine
                            style={{
                                data: { stroke: "#c43a31" },
                                parent: { border: "1px solid #ccc"}
                                 }}
                            data={[
                            { x: 1, y: 2 },
                            { x: 2, y: 3 },
                            { x: 3, y: 5 },
                            { x: 4, y: 4 },
                            { x: 5, y: 7 }
                                ]}
                        />
                    </VictoryChart>
                    </div>
                </div>
                <div className='mainHistogram mainDisplayItems two'>
                    <div className='headersContainer'>

                    </div>
                    <div className='chart'>
                    <VictoryChart minDomain={{ y: 0 }} domainPadding={60} width={900}>
                        <VictoryBar
                            style={{ data: { fill: "#c43a31" } }}
                            data={[
                                {quarter: 1, earnings: 13000},
                                {quarter: 2, earnings: 16500},
                                {quarter: 3, earnings: 14250},
                                {quarter: 4, earnings: 19000}
                                ]}

                                x="quarter"
                                y="earnings"
                        />    
                    </VictoryChart>
                    </div>
                </div>
                <div className='mainTable mainDisplayItems three'>
                <div>
                    <table className="customers">
                        <thead>
                            <tr>
                                <th colSpan='2'>
                                    Breaking Crypto News
                                </th>
                            </tr> 
                        </thead>
                        <tbody>
                            <tr>
                                <td width='90%'><h2>Title</h2><p>Alfreds Futterkiste</p></td>
                                <td>Germany</td>
                            </tr>
                            <tr>
                                <td width='90%'><h2>Title</h2><p>Alfreds Futterkiste</p></td>
                                <td>Germany</td>
                            </tr>
                            <tr>
                                <td width='90%'><h2>Title</h2><p>Alfreds Futterkiste</p></td>
                                <td>Germany</td>
                            </tr>
                            <tr>
                                <td width='90%'><h2>Title</h2><p>Alfreds Futterkiste</p></td>
                                <td>Germany</td>
                            </tr>
                            <tr>
                                <td width='90%'><h2>Title</h2><p>Alfreds Futterkiste</p></td>
                                <td>Germany</td>
                            </tr>
                            <tr>
                                <td width='90%'><h2>Title</h2><p>Alfreds Futterkiste</p></td>
                                <td>Germany</td>
                            </tr>
                            <tr>
                                <td width='90%'><h2>Title</h2><p>Alfreds Futterkiste</p></td>
                                <td>Germany</td>
                            </tr>
                            <tr>
                                <td width='90%'><h2>Title</h2><p>Alfreds Futterkiste</p></td>
                                <td>Germany</td>
                            </tr>
                            <tr>
                                <td width='90%'><h2>Title</h2><p>Alfreds Futterkiste</p></td>
                                <td>Germany</td>
                            </tr>
                            <tr>
                                <td width='90%'><h2>Title</h2><p>Alfreds Futterkiste</p></td>
                                <td>Germany</td>
                            </tr>
                            <tr>
                                <td width='90%'><h2>Title</h2><p>Alfreds Futterkiste</p></td>
                                <td>Germany</td>
                            </tr>
                            <tr>
                                <td width='90%'><h2>Title</h2><p>Alfreds Futterkiste</p></td>
                                <td>Germany</td>
                            </tr>
                            <tr>
                                <td width='90%'><h2>Title</h2><p>Alfreds Futterkiste</p></td>
                                <td>Germany</td>
                            </tr>
                            <tr>
                                <td width='90%'><h2>Title</h2><p>Alfreds Futterkiste</p></td>
                                <td>Germany</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                </div>
                <div className='mainFacts mainDisplayItems four'>
                    4
                </div>
            </div>
        </div>
    )
}

export default Main;