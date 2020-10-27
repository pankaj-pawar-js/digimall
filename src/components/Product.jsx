import React, { useContext, useState } from "react";
import { AppContext } from "../StateProvider";

import { Link } from "react-router-dom";
import { formatPrice } from "../utils/formatTextService";

const productStyle = {
    button: {
        fontSize: "10px",
        backgroundColor: "gold",
        border: "1px solid",
        float: "right",
    },
    rating: {
        color: "gold",
    },
};

function Product({
    id,
    title,
    price,
    rating,
    image,
    quantity: productQuantity,
    showRemoveButton,
}) {
    const [state, dispatch] = useContext(AppContext);
    const [quantity, setQuantity] = useState(productQuantity);
    const handleClickOnAddToBasket = () => {
        dispatch({
            type: "ADD_TO_CART",
            payload: { id, title, price, rating, image, quantity },
        });
    };

    const handleClickOnRemoveFromCart = () => {
        dispatch({
            type: "REMOVE_FROM_CART",
            payload: { id, title, price, rating, image, quantity },
        });
    };

    const handleQuantityClick = (type) => {
        if (type === "minus" && quantity > 1) {
            setQuantity(quantity - 1);
            showRemoveButton &&
                dispatch({
                    type: "DECREMENT_PRODUCT_QUANTITY",
                    payload: { id, quantity: 1 },
                });
        } else if (type === "plus") {
            setQuantity(quantity + 1);
            showRemoveButton &&
                dispatch({
                    type: "INCREMENT_PRODUCT_QUANTITY",
                    payload: { id, quantity: 1 },
                });
        }
    };

    return (
        <div className="product">
            <div className="title">
                <Link to={`/product/${id}`}>{title}</Link>
            </div>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
                <img src={image} alt={title} />
                <div>
                    <div>{formatPrice(price)}</div>
                    <div>
                        <span style={productStyle.rating}>
                            &#9733;&#9733;&#9733;&#9733;&#9733;
                        </span>
                    </div>
                </div>
            </div>

            <div className="product-footer">
                <div className="quantity-container">
                    <button
                        className="minus-button"
                        onClick={() => handleQuantityClick("minus")}
                        disabled={quantity === 1}
                    >
                        &#8722;
                    </button>
                    <input value={quantity} readOnly={true} />
                    <button
                        className="plus-button"
                        onClick={() => handleQuantityClick("plus")}
                    >
                        &#43;
                    </button>
                </div>
                {!showRemoveButton && (
                    <button
                        style={productStyle.button}
                        onClick={handleClickOnAddToBasket}
                    >
                        Add to basket
                    </button>
                )}
                {showRemoveButton && (
                    <button
                        style={productStyle.button}
                        onClick={handleClickOnRemoveFromCart}
                    >
                        Remove from basket
                    </button>
                )}
            </div>
        </div>
    );
}

export default Product;
