import React from "react";
import ReactDOM from "react-dom/client";
import Content from "./component/Content";
import Header from './component/Header';
import Footer from './component/Footer';
import './index.css';
import Job from './component/Job';
import JobUseForm from './component/JobUseForm';

// function component
function App() {
    return (
        <div className="container">
            <Header/>
            {/* <Content/> */}
            <JobUseForm/>
            <Footer/>
        </div>
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
root.render(<App />);