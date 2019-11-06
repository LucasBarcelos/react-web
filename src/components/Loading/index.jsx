import React from 'react';
import PropTypes from 'prop-types';

const Loading = (props) => {
    console.log(props);

    if (props.isLoading) {
        return (<div> LOADING... </div>);
    } 

    return null;
};

// Define um valor padrão
Loading.defaultProps = {
    isLoading: false,
};

// Define que está aguardando um booleano
Loading.propTypes = {
    isLoading: PropTypes.bool
};

export default Loading;