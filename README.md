This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

-   UI is inspired by Amazon.

## Live Link

-   Digimall app is depoled on the heroku : https://digimall2020.herokuapp.com/

![home](./screenshots/home.png)

## Available Scripts

In the project directory, you can run:

### `npm start:dev`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build && npm start`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

Open [http://localhost:4000](http://localhost:4000) to view it in the browser.

Default port is set to 4000 for prod build, use `PORT` variable to set custom port.

# How to use Digimall App

-   Go to `Home` page, it contains list of all products
-   Add product to the cart by click `Add to basket`. If any product is added, it's count will be show in header `cart` icon.
-   Click on product title to get detailed infor regarding product
-   Click on `Cart` icon in the header to navigate to `checkout` page
-   Click on `DigiMall` icon to navigate to `Home` again.

# Architecture

![architecture](./screenshots/architecture.png)

## Responsiveness

-   DigiMall is ready to go on all types of devices whether it is small, medium or large.
-   responsiveness is maintained using column layout shifting(Flexbox designing)

### mobile

![mobile](./screenshots/mobile.png)

### desktop

![desktop](./screenshots/desktop.png)

### ipad

![ipad](./screenshots/ipad-pro.png)

## Folder structure

-   how files arranged inside `src` folder

### `components`

-   it contains all the components needed to create the App

### `images`

-   it contains all the images used in App

### `server`

-   it includes dummy api call's data

### `utils`

-   it conatins utility files like for formating price in INR, etc.

### entry point

-   entry point is the index.js file

### state management

-   state management is done via react-context.
-   `StateProvider` component is created, which wraps the whole app. Context is created by the name `AppContext`.
-   `intialState` of the app is

```code
const initState = {
    cart: [],
    products: []
}
```

-   `reducer.js` file in used to update the state by a component

### Simulating server call

-   there is a `api.js` file under `utils` folder, which is used to mocking/fetching server data

-   API's exposed are

```
getProductList() --> for getting all products list

getProductDetailsByPId(id)  --> for getting specific product details
```

### screenshots

-   contains all screenshots related to Digimall APP

## LightHouse Audit

![lighthouse](./screenshots/lighthouse.png)

## Future Proposals

-   if the project grows, it is better if we use `redux`. It gives a better visualisation of state with it's dev tools.
-   unit testing should be done for all components to make sure while introducing new features OR enhancing existing feature, something is not regressed.
-   Automation support using puppeteer to simulate integration testing with back-end.
-   Improving Perfomance using react.lazy/suspense OR using useMemo, useCallback, etc further.

## Limitations

-   search box is just for demo purpose. (it is not working)
-   Product's technical details is same for all products
-   not doing real time server calls
