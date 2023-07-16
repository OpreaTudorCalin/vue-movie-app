# Vue Movies App

This is a simple Vue.js application that allows users to browse and search for movies using the OMDB API. The app consists of multiple components and uses Vue Router for navigation.

## Features

- Home page: Displays a featured movie, a search box, and a list of movies.
- Movie Detail page: Shows detailed information about a specific movie.
- About page: Provides information about the application.

## Installation

1. Clone the repository: `git clone https://github.com/OpreaTudorCalin/vue-movie-app.git`
2. Navigate to the project directory: `cd project-movie-app-vue`
3. Install dependencies: `npm install`

## Usage

1. Start the development server: `npm run serve`
2. Open your browser and visit: `http://localhost:8080`

## Components

- `App.vue`: The main component that serves as the entry point of the application. It contains the header and main sections, and it renders the appropriate component based on the current route.
- `HomeComp.vue`: Displays the home page with a featured movie, a search box, and a list of movies. Users can click on a movie to view its details.
- `MovieDetail.vue`: Displays detailed information about a specific movie. It fetches the movie data from the OMDB API using the movie ID passed as a route parameter.
- `AboutComp.vue`: Provides information about the application. It includes a link to navigate back to the home page.

## API Key

To fetch movie data from the OMDB API, an API key is required. Make sure to provide your API key in the `env.js` file located in the `src` directory.

## Dependencies

- Vue.js: A progressive JavaScript framework for building user interfaces.
- Vue Router: The official router for Vue.js applications.
- axios: A promise-based HTTP client for making API requests.

## Contributions

Contributions are welcome! If you find any issues or have suggestions for improvements, feel free to open an issue or submit a pull request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more information.
