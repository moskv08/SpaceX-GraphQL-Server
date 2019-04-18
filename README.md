# :rocket: SpaceX GraphQL Server
  
### Intro
  
This solution provides you a graphQL runtime environment to retrieve data from the **SpaceX API** with smart graphQL queries.  
  
You want to learn more about **graphQL**, visit the website [https://graphql.org](https://graphql.org)
  
To get information about the SpaceX **REST API** visit the following [Github Repository](https://github.com/r-spacex/SpaceX-API)

### How was this implemented?

The backend server application was implemented with **Node.js** and some helpers as follows:  

- Express.js Framework 
- GraphQL Module
- Express-GraphQL Module
- Axios Module (for API requests)
- Nodemon Module (Serve on save)

### How to use it?  
  
Clone the repository.
```
$ git clone https://github.com/RobbMoskv/SpaceX-GraphQL-Server.git
```

Download the dependencies.
```
$ npm install
```

Run the application locally on **localhost:5000** initially
```
$ npm run start
```

or with _nodemon_ to keep track on changes
```
$ npm run server
```

and finally go to [http://localhost:5000/graphql](http://localhost:5000/graphql) to use the **GraphiQL** to query your data.