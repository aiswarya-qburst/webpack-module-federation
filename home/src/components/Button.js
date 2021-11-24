import React from 'react';

const Button = (props) => {
    const btn = {
        padding: "10px",
        margin: "10px",
        border: "none",
        borderRadius: "5px",
        backgroundColor: "#111",
        color: "#fff",
        float: "right"
    };

    return <button style={btn}>{props.children}</button>
}

export default Button;