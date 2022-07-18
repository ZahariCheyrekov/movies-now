# Movies-Now

You can visit the project from here: https://movies-noww.herokuapp.com/

# About this project

Movies Now is a place where you can find your favorite movies. The application gives user full access to the information about each and every movie in the collection of movies. Users are able to learn more about the movies they love. Information about the movie, such as the year in wich the movie was made, a description of the movie, an overview of the movie, and even a short trailer that will introduce the entire movie to the user. The application gives the opportunity to every registered user to create own movie and add it to the collection of movies.

# How to run the app on your computer

1. You can download the project ZIP file or you can clone the repository directly.
2. Open the project with IDE.
3. Open terminal with `Ctrl + J`.
4. Navigate to movies-now folder with `cd movies-now`.
5. Type `npm i` to install all modules that are listed on `package.json` file and their dependencies.
6. Type `npm start` to run the project in the browser. It will start on `http://localhost:3000`, but you can change it to another if necessary. Type `y` to do it.
7. Explore Movies Now.

# User movies

- The registered users can create movies they love. 
- They can explore the movies they added and also the other movies created by different users.
- They can create movie by navigating to create page or simply by going to `/create`.

# Features

- Register
  - create account
  - explore movie collection
  - share your experience with others
  - become part of Movies Now community

- Login
  - login in existing account
  - find movies you love
  
- Create Movie
  - create movie
  - add it to the movie collection
  - learn about other productions

- Search
  - search movies by genre 
  - search movies by title
  - find the movies you want as fast as possible

- Movie Info
  - learn more about the given movie
  - read about production process

- Watch Trailers
  - watch movie trailer
  - enjoy the experience

# Future Features

- Like
  - users can like the movies they want

- Comment
  - user can comment in the comment section 

- Download
  - registered users can download movies

# Dependencies

  - React
  - React Router 
  - React Loading
  - React Player
  - Firebase

# Movies Now Packages

  - API
    - requester - function for making `GET`, `PUT`, `POST`, `PATCH` and `DELETE` requests  
  
  - Assets
    - package for all assets related to the application
  
  - Components
    - contain folders for each component of the application 

  - Contexts
    - AuthContext - context for user authentication 
  
  - Handlers
    - clearFieldsHandler - option for clearing all input fields of the given form 
    - createMovieHanlder - handler that receives movie information and uses requester to make `POST` request to the Firebase database
  
  - Hooks
    - useState
    - useEffect
    - useNavigate - used for forced navigation to desired page
    - useGenre - custom hook for all movie genres
  
  - Messages
    - package for storing application messages 
  
  - Services
    - localStorageServices
      - saveUser - saves user to the local storage
      - getUser - gets user from the local storage
      - removeUser - removes user from the local storage
      - getAccessToken - gets accessToken of the current user

    - movieServices
      - getAllMovies - makes `GET` request and returns all movies in the database 
      - getMovieByCardId - makes `GET` request and returns information about the given movie
      - createNewMovie - makes `POST` request that sends movie information to the database

    - userServices
      - login - gives the user opportunity to sign in with email and password
      - register - register user with email and password
      - logout - ends access to the application
    
  - Utils
    - genreUtils 
      - toggleActiveStyle - returns style class name for the selected genre
    
    - movieUtils
      - getMoviesByData - returns movie information by the given movie data type (title, genre, description, imageUrl, trailerUrl, overview, year)   

  - Validators 
    - inputValidator - function that checks if any of the given form input fields is empty
    
    - passwordValidator
      - passwordLengthValidator - checks if the entered password is less than 6 characters
      - passwordEqualityValidator - checks if repeated password is equal to the original password
    
    - yearValidator - checks if the movie year is between 1888 and current year

# Tech
  - <a href="https://reactjs.org/">React</a>
  - <a href="https://reactrouter.com/">React Router</a>
  - <a href="https://www.npmjs.com/package/react-loading">React Loading</a>
  - <a href="https://www.npmjs.com/package/react-player">React Player</a>
  - <a href="https://firebase.google.com/">Firebase</a>
  - <a href="https://firebase.google.com/docs/database">Firebase Realtime Database</a>
  - <a href="https://firebase.google.com/docs/auth">Firebase Authentication</a>
  - <a href="https://www.postman.com/">Postman</a>
  - <a href="https://unsplash.com/">Unsplash</a>
  - <a href="https://www.heroku.com/">Heroku</a>
  - <a href="https://glitch.com/">Glitch</a>

# Application Pictures

  ### Laptop
  
  #### Home
  ![movies-now-home-lp](https://user-images.githubusercontent.com/95768526/179507553-245b2968-0b12-4098-916b-7d58f3463508.png)

  
