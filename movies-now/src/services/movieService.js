import * as requester from '../api/requester.js';

const baseUrl = 'http://www.omdbapi.com?apikey=5c5d0828&s=';
const moviesUrl = 'https://chat-app-8cffe-default-rtdb.firebaseio.com/movies/.json';

export const getAllMovies = () => requester.get(moviesUrl);

export const createNewMovie = (data) => requester.post(moviesUrl, data);