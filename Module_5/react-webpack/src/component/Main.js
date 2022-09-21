import React, { useState } from "react";
import Spinner from "./Spinner";
import UseEffect from './UseEffect';
// mounted (gắn vào DOM), unmounted (gỡ ra khỏi DOM)
// useEffect(): side effect
// useEffect(callback, dependents)
// dependents
//      1. không cần khai báo: useEffect(callback)
//          + callback sẽ được thực thi mỗi khi setState
//      2. có khai báo: useEffect(callback, [])
//          + callback sẽ chỉ được thực thi 1 lần duy nhất khi component được mounted vào DOM
//      3. có khai báo: useEffect(callback, [state(s)])
function Main() {
    const [toggle, setToggle] = useState(false);
    return (
        <div>
            <button onClick={() => setToggle(!toggle)}>Toggle UseEffect</button>
            {toggle && <UseEffect />}
        </div>
    )
}
export default Main;