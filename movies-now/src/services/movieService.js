import * as requester from '../api/requester.js';

const moviesUrl = 'https://chat-app-8cffe-default-rtdb.firebaseio.com/movies/.json';

export const getAllMovies = () => requester.get(moviesUrl);

export const createNewMovie = (data) => requester.post(moviesUrl, data);