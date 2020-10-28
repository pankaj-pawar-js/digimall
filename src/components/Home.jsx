import React, { useEffect, useState, useContext } from "react";
import Banner from "./Banner";
import Product from "./Product";
import { getProductList } from "../server/api";
import { AppContext } from "../StateProvider";

import loader from "../images/spinner.gif";

function Home() {
    const [productList, setProductList] = useState([]);

    const [loading, setLoading] = useState(true);

    const [state, dispatch] = useContext(AppContext);

    useEffect(() => {
        setTimeout(() => {
            const fetchProductList = getProductList();
            setProductList(fetchProductList);
            // update products
            dispatch({
                type: "INITIALISE_PRODUCT_LIST",
                payload: fetchProductList,
            });
            setLoading(false);
        }, 2000);
    }, [productList, dispatch]);

    const renderProducts = () => {
        return (
            <div className="product-list">
                <div className="product-row">
                    <Product {...productList[0]} />
                    <Product {...productList[1]} />
                </div>
                <div className="product-row">
                    <Product {...productList[2]} />
                    <Product {...productList[3]} />
                </div>
                <div className="product-row">
                    <Product {...productList[4]} />
                    <Product {...productList[5]} />
                </div>
                <div className="product-row">
                    <Product {...productList[6]} />
                    <Product {...productList[7]} />
                </div>
            </div>
        );
    };

    return (
        <>
            <Banner />
            {loading && <img className="loader" alt="loader" src={loader} />}
            {!loading && productList.length > 0 && renderProducts()}
        </>
    );
}

export default Home;
