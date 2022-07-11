import React from 'react';
import ReactLoading from 'react-loading';

const Spinner = () => {
    return (
        < ReactLoading
            type="spin" color="#0000FF"
            height={'100vh'} width={100}
        />
    );
}

export default Spinner;