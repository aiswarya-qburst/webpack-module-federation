import React from 'react';
import Button from './Button';

const Card = ({ data }) => {
    const card = {
        boxShadow: "0 4px 8px 0 rgba(0,0,0,0.2)",
        transition: "0.3s",
        borderRadius: "5px",
        marginBottom: "30px",
        // :hover': {
        //     boxShadow: "0 8px 16px 0 rgba(0,0,0,0.2)"
        // }
    }

    return (
        <div style={card}>
            <Button>Done</Button>
            <img src={data.image} alt={data.type} style={{ width: "500px" }} />
            <div style={{ padding: "2px 16px" }}>
                <h4><b>{data.type.toUpperCase()}</b></h4>
                <p>{data.description}</p>
            </div>
        </div>
    );
}

export default Card;