import React from 'react';
import Card from './components/Card';
import data from './components/data';
import ErrorBoundary from './components/ErrorBoundary';
import './App.css';
// import Sidebar from './components/Sidebar';

const App = () => {
    return (
        <ErrorBoundary>
            <div className="app">
                {data.map(d => <Card data={d} key={d.type} />)}
                {/* <Sidebar data={data} /> */}
            </div>
        </ErrorBoundary>
    )
}

export default App;
//"webpack serve --config ./webpack.config.js --mode development",
//"serve dist -p 3000"
//webpack-cli serve --content-base public