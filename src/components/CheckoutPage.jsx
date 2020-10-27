import React, { useContext, useEffect, useMemo, useState } from "react";
import { AppContext } from "../StateProvider";
import { formatPrice } from "../utils/formatTextService";
import Product from "./Product";

const CheckoutPage = () => {
    useMemo(() => {
        window.scrollTo(0, 0);
    }, []);

    const [state, dispatch] = useContext(AppContext);
    const { cart } = state;

    const calcSubTotal = (cart) => {
        return cart.reduce(
            (acc, p) => acc + parseInt(p.quantity) * parseInt(p.price),
            0
        );
    };

    const calcTotalCount = (cart) => {
        return cart.reduce((acc, p) => acc + p.quantity, 0);
    };

    const [subtotal, setSubtotal] = useState(() => calcSubTotal(cart));
    const [total, setTotal] = useState(() => calcTotalCount(cart));

    useEffect(() => {
        setSubtotal(() => calcSubTotal(cart));
        setTotal(() => calcTotalCount(cart));
    }, [cart]);

    const renderEmptyCart = () => (
        <div className="checkout-empty-cart">
            <strong>Your cart is empty. Checkout our new collection...</strong>
        </div>
    );

    const renderCheckoutProducts = () => (
        <>
            <h6>Shopping Cart</h6>
            <div className="checkout-list-container">
                <div className="checkout-product-list-container">
                    {cart.map((p) => (
                        <Product key={p.id} {...p} showRemoveButton={true} />
                    ))}
                </div>

                <div className="subtotal">
                    {/* <h6>
                        Subtotal({total} items): {formatPrice(subtotal)}
                    </h6> */}
                    <div className="subtotal-message">
                        Your order is eligible for FREE Delivery. Select this
                        option at checkout. Details
                    </div>
                    <div className="subtotal-price">
                        <div>Subtotal({total} items):</div>
                        <div style={{ fontWeight: "700" }}>
                            {formatPrice(subtotal)}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );

    return (
        <div className="checkout">
            {cart.length === 0 && renderEmptyCart()}
            {cart.length > 0 && renderCheckoutProducts()}
        </div>
    );
};

export default CheckoutPage;
