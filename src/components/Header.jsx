import React from "react";
import SearchBox from "./SearchBox";
import Cart from "./Cart";
import NavMenu from "./NavMenu";

import { Link, withRouter } from "react-router-dom";

const headerStyle = {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
};

const Header = withRouter((props) => {
    const handleLogoClick = (e) => {
        props.history.push("/");
    };

    return (
        <div className="header" style={headerStyle}>
            <div className="app-logo" onClick={handleLogoClick}>
                DigiMall
            </div>
            <SearchBox />
            <div className="header-options">
                <Link to="/user">
                    <div className="header-option-text1">Hello, Sign in</div>
                    <div className="header-option-text2">Account & Lists</div>
                </Link>
                <NavMenu to="orders">
                    <div className="header-option-text1">Return</div>
                    <div className="header-option-text2">& Orders</div>
                </NavMenu>
                <Cart />
            </div>
        </div>
    );
});

export default Header;
