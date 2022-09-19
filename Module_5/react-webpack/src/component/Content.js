import React, { useState } from "react";
// useState() => cập nhật trạng thái dữ liệu
// const [state, setState] = useState(initValue)
// initvalue
// + Bất kể diểu dữ liệu nào của JS (string, boolean, number, object,..)
// + Một hàm (callback function)
// state = initValue
// setState: 
//      1. cập nhật lại giá trị của state
//      2. callback
// Mỗi khi setState (1 hoặc nhiều state) thì component sẽ được re-render

// one-way binding
// two-way binding
function Content(){
    const [count, setCount] = useState(0);
    // const [password, setPassword] = useState('');
    // const [email, setEmail] = useState('');

    const [state, setState] = useState({
        email:'',
        password:'',
        phone:''
    })

    const handleIncreament = () => {
        setCount((pre) => pre + 1);
        setCount((pre) => pre + 1);
        setCount((pre) => pre + 1);
        // setCount(function(pre){
        //     return pre + 1;
        // });
        // setCount(count + 2);
        // setCount(count + 3);
    };
    // const handleInputPW = (e) => {
    //     setPassword(e.target.value);
    // }
    // const handleInputEmail = (e) => {
    //     setEmail(e.target.value);
    // }

    const handleInput = (e) => {
        setState({
            ...state,
            [e.target.name] : e.target.value
        })
        console.log(state)
    }

    // const handleLogin = () => {
    //     console.log({
    //         'email' : email,
    //         'password': password
    //     })
    // }
    const handleLogin = () => {
        console.log(state)
    }

    const handleCallAPI = () => {
        // setPassword('CGHue');
        // setEmail('CodeGym');
        setState({
            email : "codegym@gmail",
            password: '888888',
            phone: '113'
        })
    }
    
    const {email, password, phone} = state;

    return (
        <div className="content">
            <h1>{count}</h1>
            <button onClick={handleIncreament}>Increament</button>
            {/* <div>
                <label>Email: </label> <input value={email} type="email" onInput={handleInputEmail}/>
                <br/>
                <label>password: </label> <input value={password} type="password" onInput={handleInputPW}/>
                <br/>
                <button onClick={handleLogin}>Login</button>
                <button onClick={handleCallAPI}>Fetch API</button>
            </div> */}
            <div>
                <label>Email: </label> <input value={email} name="email" type="email" onInput={handleInput}/>
                <br/>
                <label>Password: </label> <input value={password} name="password" type="password" onInput={handleInput}/>
                <br/>
                <label>Mobile: </label> <input value={phone} name="phone" type="tel" onInput={handleInput}/>
                <br/>
                <button onClick={handleLogin}>Login</button>
                <button onClick={handleCallAPI}>Fetch API</button>
            </div>
    
        </div>
    )
}

export default Content;