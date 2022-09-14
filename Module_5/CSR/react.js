// 1. type: 
//  a. element name
//  b. component
// 2. props
// 3. childrens
//  a. text
//  b. react element khác
const h1 = React.createElement("h1", {
    className: "heading_1",
    id: "idH1"
},"C0322G1");


const div = React.createElement("div", {
    className:"post",
    id:"div_1"
}, React.createElement("h2",{ className: "heading_2"}, "React JS")
, React.createElement("ul" ,null, 
    React.createElement("li", null, "useState()"),
    React.createElement("li", null, "useEffect()"),
    React.createElement("li", null, "useParams")))

const container = React.createElement(React.Fragment, null, h1, div);
// ReactDOM.render(h1, document.querySelector('#root'));
const root = ReactDOM.createRoot(document.querySelector('#root'));
root.render(container);