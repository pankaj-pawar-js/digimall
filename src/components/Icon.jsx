import React from "react";

function Icon({ path, cssStyle, handleClick }) {
    return (
        <div>
            <img
                style={cssStyle}
                src={path}
                onClick={(e) => handleClick && handleClick()}
                alt={path}
            />
        </div>
    );
}

export default Icon;
