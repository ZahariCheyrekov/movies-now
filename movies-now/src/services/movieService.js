import * as requester from '../api/requester.js';


const moviesUrl = 'https://chat-app-8cffe-default-rtdb.firebaseio.com/movies';

export const getAllMovies = () => requester.get(`${moviesUrl}.json`);

export const getMovieCardById = (movieId) => requester.get(`${moviesUrl}/${movieId}.json`);

export const createNewMovie = (data) => requester.post(`${moviesUrl}.json`, data);