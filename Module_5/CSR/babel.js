const content = "CodeGym Huế";
const handleClick = () => alert('hello anh em!') ;
const container = (
    <React.Fragment>
        <h1 className="heading_1" id="idH1">{content}</h1>
        <ul>
            <li style={{
                color:"red",
                backgroundColor: "green"
            }}>useState()</li>
            <li>useEffect()</li>
            <li>useParams()</li>
        </ul>
        <button onClick={handleClick} >Say hi</button>
    </React.Fragment>
)

const root = ReactDOM.createRoot(document.querySelector('#root'));
root.render(container);