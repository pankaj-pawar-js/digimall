import React from "react";
import Icon from "./Icon";
import search from "../images/search-icon.png";

function SearchBox() {
    return (
        <form className="search-box">
            <label htmlFor="searchbox">
                <input id="searchbox" type="text" aria-labelledby="searchbox" />
            </label>
            <Icon path={search} />
        </form>
    );
}

export default SearchBox;
