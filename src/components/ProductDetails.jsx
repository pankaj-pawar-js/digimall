import React from "react";
import { getProductDetailsByPId } from "../server/api";
import Product from "./Product";

function ProductDetails({ match }) {
    const details = getProductDetailsByPId(match.params.id);

    return (
        <>
            <Product {...details} />
            <div className="product-specs">
                <h6>Technical Details</h6>
                {Object.entries(details.specs).map((entry) => {
                    return (
                        <div key={entry[0]}>
                            {entry[0]} : {entry[1]}
                        </div>
                    );
                })}
            </div>
        </>
    );
}

export default ProductDetails;
