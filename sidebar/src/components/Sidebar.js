import React, { useState } from 'react';
// const Card = React.lazy(() => import('remote/Card'));
import Card from 'home/Card';
import data from 'home/data';

const Sidebar = () => {
    const [charts, updateCharts] = useState(data);

    const handleClick = (e) => updateCharts(data.filter(d => d.type === e.target.text));

    return (
        <div>
            <React.Suspense fallback={null}>
                <div class="sidenav">
                    <a onClick={() => updateCharts(data)}>All</a>
                    {data.map(d => <a onClick={handleClick} key={d.type}>{d.type}</a>)}
                </div>
                <div class="main">
                    {charts.map(chart => <Card data={chart} />)}
                </div>
            </React.Suspense>
        </div>

    );
}

export default Sidebar;