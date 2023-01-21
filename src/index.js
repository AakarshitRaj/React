import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import card from './card';


const root = ReactDOM.createRoot(document.getElementById('root'));

const headingstyle={
    backgroundColor:'yellow',
}
const name="raj";
const myVar=(<div>
    <h1 style={{backgroundColor:'red'}//border-radius:20px; -> borderRadius:'20px'
    }className='heading'>hello i am JSX</h1>
<p style={headingstyle}>aakarshit raj</p>
{5+4} {name}
<p className='para'>i am engineer</p>

<card/>;
</div>)
const mm=<p>lorem  </p>
root.render(myVar);





