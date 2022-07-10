import { useState } from 'react';

const useGenres = () => {
    const [genres] = useState([
        'All',
        'Action',
        'Adventure',
        'Animation',
        'Biography',
        'Comedy',
        'Criminal',
        'Drama',
        'Family',
        'Fantasy',
        'Horror',
        'Mystery',
        'Romance',
        'Science Fiction'
    ]);

    return genres;
}

export default useGenres;