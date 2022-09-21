import React, { useState, useEffect } from "react";
import Spinner from "./Spinner";
// Callback function trong useEffect sẽ được thực thi khi component được mounted DOM

const menus = ["posts", "comments", "users"];

function UseEffect() {
    const [password, setPassword] = useState('');
    const [state, setState] = useState({
        loading: false,
        data: []
    });
    const [menu, setMenu] = useState("comments");

    useEffect(() => {
        console.log('1');
        try {
            setState({ ...state, loading: true });
            fetch(`https://jsonplaceholder.typicode.com/${menu}`)
                .then((res) => res.json())
                .then((resData) => {
                    setState({
                        ...state,
                        data: resData,
                        loading: false
                    });
                })

        } catch (error) {
            setState({ ...state, loading: false })
        }

        // cleanup function
        // return () => {
        //     console.log('Executor before component unmounted');
        // }
    }, [menu])

    const { loading, data } = state;
    return (
        <React.Fragment>
            {console.log("2")}
            <div>
                <h1>Learning useEffect()</h1>
                <input type="password" onChange={(e) => setPassword(e.target.value)} />
                <p>{password}</p>
            </div>
            <div>
                {menus.map((item) => (
                    <button key={item}
                        style={menu === item ? { backgroundColor: "red" } : null}
                        onClick={() => setMenu(item)}
                    >{item}</button>
                ))}
            </div>
            <div>
                {
                    loading ? <Spinner /> : (
                        <table border={1}>
                            <thead>
                                <tr>
                                    <th>#ID</th>
                                    <th>Name</th>
                                    <th>Email</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    data.map(item => (
                                        <tr key={item.id}>
                                            <td>{item.id}</td>
                                            <td>{item.name || item.title}</td>
                                            <td>{item.email || item.body}</td>
                                        </tr>
                                    ))
                                }
                            </tbody>
                        </table>
                    )
                }
            </div>
        </React.Fragment>
    )
}

export default UseEffect;