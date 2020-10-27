import React from "react";
import { withRouter } from "react-router-dom";

function NavMenu({ to, children, history }) {
    const handleClick = (e) => {
        e.preventDefault();
        history.push(to);
    };
    return (
        <a href="/" onClick={handleClick}>
            {children}
        </a>
    );
}

export default withRouter(NavMenu);
