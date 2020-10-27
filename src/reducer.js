export default function reducer(state, action) {
    switch (action.type) {
        case "ADD_TO_CART": {
            // check if product is already added, just increment the quantity count
            const isPresent = state.cart.filter(p => p.id === action.payload.id);
            let updatedCart;
            if (isPresent.length) {
                updatedCart = state.cart.map((product) => {
                    if (product.id === action.payload.id) {
                        return { ...product, quantity: product.quantity + action.payload.quantity }
                    }
                    return product;
                });
            } else {
                updatedCart = [...state.cart, action.payload];
            }

            return { ...state, cart: updatedCart }
        }
        case "REMOVE_FROM_CART": {
            const cart = state.cart.filter(p => p.id !== action.payload.id);

            return { ...state, cart: [...cart] };
        }
        case "INITIALISE_PRODUCT_LIST": {
            return { ...state, products: [...action.payload] };
        }
        case "INCREMENT_PRODUCT_QUANTITY": {
            const isPresent = state.cart.filter(p => p.id === action.payload.id);
            let updatedCart;
            if (isPresent.length) {
                updatedCart = state.cart.map((product) => {
                    if (product.id === action.payload.id) {
                        return { ...product, quantity: product.quantity + action.payload.quantity }
                    }
                    return product;
                });
                return { ...state, cart: updatedCart }
            }

            return state;
        }
        case "DECREMENT_PRODUCT_QUANTITY": {
            const isPresent = state.cart.filter(p => p.id === action.payload.id);
            let updatedCart;
            if (isPresent.length) {
                updatedCart = state.cart.map((product) => {
                    if (product.id === action.payload.id) {
                        return { ...product, quantity: product.quantity - action.payload.quantity }
                    }
                    return product;
                });
                return { ...state, cart: updatedCart }
            }
            return state;
        }
        default: return state;
    }
}