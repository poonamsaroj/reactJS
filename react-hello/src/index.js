import React from 'react';
import ReactDOM from 'react-dom';


// With React.createElement()
function Helloworldbycreateelement(){
    return React.createElement(
        'h2',
        {id: 'abc'},
        'Hello World In Create Element'        
    );
}   

// With return JSX function with array return
// Below method gives a 'Warning: Each child in a list should have a unique "key" prop.'
function Helloworld1(){
    return [
        <h1>Hello World in array</h1>,
        <Helloworldbycreateelement />
    ];
}

// With return JSX function with paranthesis and inside a wrapper 
// Prefered Technique
function Helloworld2(){
    return (
        //React.Fragment can also be written as <></> 
        <React.Fragment>
            <Helloworldbycreateelement />
            <Helloworld1 />
            <h1>Hello World in React.Fragment wrapper</h1>
        </React.Fragment>
    );
}

// Expression in React with ternary condition
function WithExpression(){
    let username = "root";
    
    return (
        username === 'root' ?  
        <>
            <em>Hey {username}, Welcome</em>
            <Helloworldbycreateelement />
            <Helloworld1 />
            <Helloworld2 />
        </> : <em>Hey Expression is not satified</em>
    );
}

ReactDOM.render(<WithExpression />, document.querySelector('#root'));
