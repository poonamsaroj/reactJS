import React from 'react';
import ReactDOM from 'react-dom';

function Helloworld(){
    return (
        <React.Fragment>
            <h1>Hello World</h1>
            <Helloworldbycreateelement />
        </React.Fragment>
    );
}

function Helloworldbycreateelement(){
    return React.createElement(
        'h1',
        {id: 'abc'},
        'Hello World In Create Element'        
    );
}

ReactDOM.render(<Helloworld />, document.querySelector('#root'));
