import React from 'react';
import ReactDOM from 'react-dom';

import Header from './Header';



import 'bootstrap/dist/css/bootstrap.css'


function Home() {
    return (
        <div className="container">
            <Header />
            
        </div>
    );
}

export default Home;

if (document.getElementById('home')) {
    ReactDOM.render(<Home />, document.getElementById('home'));
}
