import React from 'react';
import ReactDOM from 'react-dom';

function Helloworld(){
    return (
        <h1>Hello World</h1>
    );
}

ReactDOM.render(<Helloworld />, document.querySelector('#root'));
