# GPU_Map

This project was created to help alleviate the GPU shortage problem.\
People are able to contribute to a database of available GPU locations by reporting physical drops.\
Others can search for available locations and filter.

## Available Scripts

In the project directory, you can run:

## Run the front end directory

### `cd front-end && npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The google map requires an api key to work properly. You can add an api key by 
### `cd front-end && touch REACT_APP_GOOGLE_MAPS_API_KEY=YOUR_API_KEY > .env.local`

## Run the back end directory

### `cd demo && mvn spring-boot:run`

Runs the backend on [http://localhost:8080](http://localhost:8080).\
Backend is built using Java Spring Boot along with MySQL.