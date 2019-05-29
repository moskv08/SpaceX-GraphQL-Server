# :rocket: SpaceX GraphQL Server
  
### Intro
  
This solution provides you a graphQL runtime environment to retrieve data from the **SpaceX API** by allowing you to use smart graphQL queries.  
  
If you want to learn more about **graphQL** then just visit the official website [https://graphql.org](https://graphql.org). To get more information about the SpaceX **REST API** visit the following [Github Repository](https://github.com/r-spacex/SpaceX-API).

### How was this GraphQL server implemented?

The backend server application was implemented with **Node.js** and some helpers as follows:  

- [Express.js](https://expressjs.com/) Framework 
- GraphQL Module
- Express-GraphQL Module
- Axios Module (for API requests)
- Nodemon Module (Serve on save)
- [Jasmine](https://jasmine.github.io/) Testing Framework
- [Docker](https://github.com/docker) Engine

### How to run it?  
  
Just clone the repository and
```
$ git clone https://github.com/RobbMoskv/SpaceX-GraphQL-Server.git
$ cd SpaceX-GraphQL-Server
```

download all necessary dependencies via npm (or yarn).
```
$ npm install
```

Run the application locally on **localhost:5000** initially
```
$ npm run start
```

or with the _nodemon_ mode to keep track of environment changes.
```
$ npm run server
```
### How to query data?

As there are of course more ways to query data the following examples  
shall give you an overview how to differenciate between single object and list querries.

```json
# Get all flights
{
  launches {
    flight_number
    mission_name
    launch_success
    launch_year
  }
}
```

```json
# Get a specific flight
{
  launch(flight_number: 1) {
    flight_number
    mission_name
    launch_success
    launch_year
  }
}
```



Finally open your browser and go to [http://localhost:5000/graphql](http://localhost:5000/graphql) to use the **GraphiQL** to query your data.
  

Enjoy!