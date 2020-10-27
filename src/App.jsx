import React from "react";
import Header from "./components/Header";
import Home from "./components/Home";
import User from "./components/User";
import Orders from "./components/Orders";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import CheckoutPage from "./components/CheckoutPage";
import Footer from "./components/Footer";
import ProductDetails from "./components/ProductDetails";

const appRenderFunction = () => {
    return (
        <BrowserRouter>
            <div className="header-container">
                <Header />
            </div>
            <div className="content">
                <Switch>
                    <Route exact path="/" component={Home}></Route>
                    <Route path="/user" component={User}></Route>
                    <Route path="/orders" component={Orders}></Route>
                    <Route path="/checkout" component={CheckoutPage}></Route>
                    <Route
                        path="/product/:id"
                        render={(props) => {
                            // <Product {...productList[0]} />
                            return (
                                <div className="product-details">
                                    <ProductDetails {...props} />
                                </div>
                            );
                        }}
                    ></Route>
                    <Route
                        path="*"
                        render={() => {
                            return (
                                <div
                                    style={{
                                        fontSize: "20px",
                                        fontWeight: "800",
                                    }}
                                >
                                    404 page not found!!!
                                </div>
                            );
                        }}
                    ></Route>
                </Switch>
            </div>
            <Footer />
        </BrowserRouter>
    );
};

const App = () => {
    return appRenderFunction();
};

export default App;
