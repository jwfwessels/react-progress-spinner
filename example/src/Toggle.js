import React from "react";

const Toggle = ({callback, state, values = {'true': 'off', 'false': 'on'}}) => {
    return (
        <button className="Button" onClick={callback}>
            {values[state]}
        </button>
    );
};

export default Toggle;
