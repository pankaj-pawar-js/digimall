import React from "react";
import Icon from "./Icon";
import search from "../images/search-icon.png";

function SearchBox(props) {
    return (
        <div className="search-box">
            <input />
            <Icon path={search} />
        </div>
    );
}

export default SearchBox;
