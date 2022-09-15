import React from "react";
import ReactDOM  from "react-dom/client";

// function component
function App(){
    return (
        <h1>Webpack React Function Component</h1>
    )
}
// class component
// class App extends React.Component{
//     render(){
//         return (
//             <h1>Webpack React</h1>
//         )
//     }
// }

const root = ReactDOM.createRoot(document.querySelector('#root'));
root.render(<App/>);