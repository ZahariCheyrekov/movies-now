# Movies-Now

You can visit the project from here: https://movies-noww.herokuapp.com/

# Table of Contents
  - <a href="#about">About this Project</a>
  - <a href="#howto">How to run the app on your computer</a>
  - <a href="#um">User Movies</a>
  - <a href="#ftrs">Features</a>
  - <a href="#ff">Future Features</a>
  - <a href="#dep">Dependencies</a>
  - <a href="#movnowpckg">Movies Now Packages</a>
  - <a href="#tech">Tech</a>
  - <a href="#apppic">Application Pictures</a>

#  <p id="about">About this project</p>

Movies Now is a place where you can find your favorite movies. The application gives user full access to the information about each and every movie in the collection of movies. Users are able to learn more about the movies they love. Information about the movie, such as the year in wich the movie was made, a description of the movie, an overview of the movie, and even a short trailer that will introduce the entire movie to the user. The application gives the opportunity to every registered user to create own movie and add it to the collection of movies.

# <p id="howto">How to run the app on your computer</p>

1. You can download the project ZIP file or you can clone the repository directly.
2. Open the project with IDE.
3. Open terminal with `Ctrl + J`.
4. Navigate to movies-now folder with `cd movies-now`.
5. Type `npm i` to install all modules that are listed on `package.json` file and their dependencies.
6. Type `npm start` to run the project in the browser. It will start on `http://localhost:3000`, but you can change it to another if necessary. Type `y` to do it.
7. Explore Movies Now.

# <p id="um">User Movies</p>

- The registered users can create movies they love. 
- They can explore the movies they added and also the other movies created by different users.
- They can create movie by navigating to create page or simply by going to `/create`.

# <p id="ftrs">Features</p>

- <strong>Register</strong>
  - create account
  - explore movie collection
  - share your experience with others
  - become part of Movies Now community

- <strong>Login</strong>
  - login in existing account
  - find movies you love
  
- <strong>Create Movie</strong>
  - create movie
  - add it to the movie collection
  - learn about other productions

- <strong>Search</strong>
  - search movies by genre 
  - search movies by title
  - find the movies you want as fast as possible

- <strong>Movie Info</strong>
  - learn more about the given movie
  - read about production process

- <strong>Watch Trailers</strong>
  - watch movie trailer
  - enjoy the experience

# <p id="ff">Future Features</p>

- <strong>Like</strong>
  - users can like the movies they want

- <strong>Comment</strong>
  - user can comment in the comment section 

- <strong>Download</strong>
  - registered users can download movies

# <p id="dep">Dependencies</p>

  - <a href="https://reactjs.org/">React</a>
  - <a href="https://reactrouter.com/">React Router</a>
  - <a href="https://www.npmjs.com/package/react-loading">React Loading</a>
  - <a href="https://www.npmjs.com/package/react-player">React Player</a>
  - <a href="https://firebase.google.com/">Firebase</a>

# <p id="movnowpckg">Movies Now Packages</p>

  - <strong>API</strong>
    - requester - function for making `GET`, `PUT`, `POST`, `PATCH` and `DELETE` requests  
  
  - <strong>Assets</strong>
    - package for all assets related to the application
  
  - <strong>Components</strong>
    - contain folders for each component of the application 

  - <strong>Contexts</strong>
    - AuthContext - context for user authentication 
  
  - <strong>Handlers</strong>
    - clearFieldsHandler - option for clearing all input fields of the given form 
    - createMovieHanlder - handler that receives movie information and uses requester to make `POST` request to the Firebase database
  
  - <strong>Hooks</strong>
    - useState
    - useEffect
    - useNavigate - used for forced navigation to desired page
    - useGenre - custom hook for all movie genres
  
  - <strong>Messages</strong>
    - package for storing application messages 
  
  - <strong>Services</strong>
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
    
  - <strong>Utils</strong>
    - genreUtils 
      - toggleActiveStyle - returns style class name for the selected genre
    
    - movieUtils
      - getMoviesByData - returns movie information by the given movie data type (title, genre, description, imageUrl, trailerUrl, overview, year)   

  - <strong>Validators</strong>
    - inputValidator - function that checks if any of the given form input fields is empty
    
    - passwordValidator
      - passwordLengthValidator - checks if the entered password is less than 6 characters
      - passwordEqualityValidator - checks if repeated password is equal to the original password
    
    - yearValidator - checks if the movie year is between 1888 and current year

# <p id="tech">Tech</p>

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

# <p id="apppic">Application Pictures</p>

  ### Laptop
  
  #### Home
  ![movies-now-home-lp](https://user-images.githubusercontent.com/95768526/179507553-245b2968-0b12-4098-916b-7d58f3463508.png)

  #### Movies
  ![movies-now-movies-lp](https://user-images.githubusercontent.com/95768526/179508598-2e003be9-40cd-40cb-a4ff-1906fbe83e72.png)

  #### Movie Details
  ![movies-now-details-lp](https://user-images.githubusercontent.com/95768526/179508664-38d3b439-8569-4b34-ad79-971f56b09ebf.png)

  #### Create Movie
  ![movies-now-create-lp](https://user-images.githubusercontent.com/95768526/179508742-017ec8e4-6c73-487d-a384-8b54607ad73c.png)

  #### Login
  ![movies-now-login-lp](https://user-images.githubusercontent.com/95768526/179508777-78795631-e741-4279-90d6-242b126ebe73.png)

  #### Register
  ![movies-now-register-lp](https://user-images.githubusercontent.com/95768526/179508821-656f3b7e-d47b-4867-aea9-392b9ce5c754.png)


  ### Phone
  
  #### Home
  ![movies-now-home-ph](https://user-images.githubusercontent.com/95768526/179510318-194cc494-fa4d-4c5a-8fc0-8abbb16b76a1.png)

  #### Movies
  ![movies-now-movies-ph](https://user-images.githubusercontent.com/95768526/179510363-3191d769-2144-48ad-a735-13c351000690.png)

  #### Movie Details
  ![movies-now-details-p](https://user-images.githubusercontent.com/95768526/179510580-aa454a8f-32be-4cce-9883-082a2dc6f343.png)

  #### Create Movie
  ![movies-now-create-ph](https://user-images.githubusercontent.com/95768526/179510617-1d7e2653-804f-4df5-9cb6-4c7a1314b1fe.png)

  #### Login
  ![movies-now-login-ph](https://user-images.githubusercontent.com/95768526/179510659-f895de6d-45ab-499d-aaab-6ff040876863.png)
  
  #### Register
  ![movies-now-register-ph](https://user-images.githubusercontent.com/95768526/179510688-0d55ed14-6f8e-46dd-8f86-48cfcbda0989.png)
