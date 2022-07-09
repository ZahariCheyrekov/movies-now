import * as requester from '../api/requester.js';


const moviesUrl = 'https://chat-app-8cffe-default-rtdb.firebaseio.com/movies';

export const getAllMovies = () => requester.get(`${moviesUrl}.json`);

export const getMovieCardById = (movieId) => requester.get(`${moviesUrl}/${movieId}.json`);

export const createNewMovie = (data) => requester.post(`${moviesUrl}.json`, data);

export const deleteMovie = (movieId) => requester.del(`${moviesUrl}/${movieId}.json`);

export const likeMovie = (movieId, data) => requester.patch(`${moviesUrl}/${movieId}.json`, data);

export const getLikes = (movieId) => requester.get(`${moviesUrl}/${movieId}/likes.json`);