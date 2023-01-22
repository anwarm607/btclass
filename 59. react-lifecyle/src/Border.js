import React from "react";


export const Border = (props) => {
    return (
        <div style={{borderRadius: '4px', border: '1px solid red'}}>
            {props.children}
            {props.extra}

            <button onClick={() => props.changeCount()}>+</button>
            <p>{props.count}</p>
        </div>
    )
}
