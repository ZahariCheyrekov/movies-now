import React from 'react';
import useGenre from '../../../hooks/useGenre';

import { toggleActiveStyle } from '../../../utils/genreUtil';
import { getMoviesByGenre } from '../../../utils/movieUtil';

const MovieGenres = ({
    selected,
    setSelected,
    setMovies,
    isActive,
    getMovies
}) => {
    const genres = useGenre();

    return (
      
    );
}

export default MovieGenres;