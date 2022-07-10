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
        isActive &&
        <ul className="mv-genres-ul">
            {genres.map(genre => (
                <li
                    key={genre}
                    className={toggleActiveStyle(selected, genre)}
                    onClick={async () => {
                        setSelected(genre);

                        if (genre === 'All') {
                            getMovies();
                        } else {
                            const movies = await getMoviesByGenre(genre);
                            setMovies(movies);
                        }
                    }}
                >{genre}
                </li>
            ))}
        </ul>
    );
}

export default MovieGenres;