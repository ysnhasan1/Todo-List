import React from "react";

function InputArea(props) {
    return (
        <div>
            <input name="text" type="text" placeholder="Enter something" spellCheck="false" onChange={props.inputFunc} value={props.userInp}></input>

            <button onClick={props.clickFunc}>Add</button>
        </div>
    )
};

export default InputArea;