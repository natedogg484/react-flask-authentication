import React from "react";

const Card = props => (
    <div className="card" id="user">
        <div className="card-title">
            <p>{props.username}</p>
        </div>
    </div>
);

export default Card;