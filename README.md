## React IP Adress Tracker

>The challenge: to build an IP Address Tracker app and get it looking as close as possible to the design provided by [frontmentor.io](https://www.frontendmentor.io/challenges/ip-address-tracker-I8-0yYAH0). To get the IP Address locations, I used the [IP Geolocation API](https://geo.ipify.org/) by IPify. To generate the map, I used [LeafletJS](https://leafletjs.com/).

>Users of the app should be able to:
- See their own IP Address on the map on the initial page load
- Search for any IP addresses or domains and see the key information and location
- View the optimal layout for each page depending on their device's screen size
- See hover states for all interactive elements on the page

# Front-end Style Guide

## Layout

The designs were created to the following widths:

- Mobile: 375px
- Desktop: 1366px

## Colors

- Very Dark Gray: hsl(0, 0%, 17%)
- Dark Gray: hsl(0, 0%, 59%)

## Typography

### Body Copy

- Font size (text input): 18px

### Font

- Family: [Rubik](https://fonts.google.com/specimen/Rubik)
- Weights: 400, 500, 700


This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `Leaflet installation`

npm install react-leaftlet --save then
npm i leaflet

plus add css to index.html

<link
  rel="stylesheet"
  href="https://unpkg.com/leaflet@1.6.0/dist/leaflet.css"
  integrity="sha512-xwE/Az9zrjBIphAcBb3F6JVqxf46+CDLwfLMHloNu6KEQCAWi6HcDUbeOfBIptF7tcCzusKFjFw2yuvEpDL9wQ=="
  crossorigin=""
/>