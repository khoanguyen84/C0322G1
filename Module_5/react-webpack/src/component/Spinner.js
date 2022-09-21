import React from "react";
import loading from '../asset/images/loading.gif';
function Spinner(){
    return (
        <div>
            <img className="loading" src={loading} alt="" />
            
             {/* <p>Loading....</p> */}
        </div>
    )
}

export default Spinner;