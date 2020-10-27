import React, { useContext } from "react";
import { withRouter } from "react-router-dom";
import { AppContext } from "../StateProvider";
import Icon from "./Icon";

function Cart({ history }) {
    const [state] = useContext(AppContext);

    const productsAddedInCart = state.cart.reduce(
        (acc, product) => acc + product.quantity,
        0
    );

    const handleClick = () => {
        history.push("/checkout");
    };
    return (
        <div className="cart" onClick={handleClick}>
            <Icon
                path="http://pngimg.com/uploads/shopping_cart/shopping_cart_PNG4.png"
                cssStyle={{ width: "25px", marginTop: "10px" }}
            />
            <span className="items-count">{productsAddedInCart}</span>
        </div>
    );
}

export default withRouter(Cart);
