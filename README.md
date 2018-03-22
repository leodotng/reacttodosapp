# Todos App

Mission: Build a simple todo app using a Rails API and ReactJS frontend. You will build a minimal Rails backend API to manage data, and a frontend UI using ReactJS to consume and interact with the Rails API.

## Requirements

* A user can sign up and/or sign in to the system
* A user can create/edit/delete a list of projects within the app
* A user can create/edit/delete todo items within a given project (edit counts for toggling todo as “completed”)

## Submission

The assessment will be submitted as two GitHub repositories.
* One repo for the Rails API (https://github.com/leodotng/todos-api)
* One repo for the ReactJS frontend (https://github.com/leodotng/reacttodosapp)

### Expectations

The API will...
* Be built using Ruby on Rails (http://rubyonrails.org/) 
* Be Versioned (route prefixed with “/api/v1/” for example)
* Be RESTful (https://en.wikipedia.org/wiki/Representational_state_transfer)
* Support JSON content-type
* Provide API authentication using JWT https://jwt.io/ https://en.wikipedia.org/wiki/JSON_Web_Token
* RESTful CRUD (Create Read Update Delete) endpoints for projects and todo items
* Require authentication and validate access to resources
* Use 401/403 response codes accordingly
* Respond with accurate and meaningful information
* Use appropriate HTTP code (https://en.wikipedia.org/wiki/List_of_HTTP_status_codes)
* Supply relevant error/success information in the response body
The UI will…
* Be built using ReactJS (https://reactjs.org/) 
* Provide views for user signup/signin (via the API)
* Provide restricted views for projects and todos
* Should require authenticated user, redirect to login otherwise
* Connect UI actions with API (to create/edit/delete projects and/or todo items)
* Should require authenticated user, handled by API backend


### Recommendations

Data models might look something like…
#### User
* A user of the system
* Includes basic user info
* Can sign up via registration API endpoint
* Can log in via authentication API endpoint
#### Project
* An organizational unit to contain todo items
* Belongs to a “User”
#### Todo
* An actual todo item
* Belongs to a “Project”
* Contains a name/description and a boolean toggle of todo state (is completed)

## Extra Credit
* Use bootstrap or similar framework to implement responsive design
* Use Recompose for ReactJS frontend https://github.com/acdlite/recompose 
* Dockerize both the Rails API and the React UI to run easily in a local simulated environment
* Update the Rails API to support additional content types (XML, etc)
* Allow users to signup/signin using OAuth providers (Google, Facebook, GitHub, etc)

## Running the tests

Ruby On Rails Testing
Bundle exec rspec


## Deployment

Docker

## Built With

* [Ruby On Rails](http://www.dropwizard.io/1.0.2/docs/) - Backend API
* [React](https://maven.apache.org/) - React Front End
* [Semantic UI React](https://react.semantic-ui.com/) - Semantic UI React Front End Framework

## Authors

* **Josh Leong** - *Initial work* - [Josh Leong](https://github.com/leodotng)

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## Acknowledgments


