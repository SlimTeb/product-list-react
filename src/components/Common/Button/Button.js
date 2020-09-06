import React from 'react';
import PropTypes from 'prop-types';

const Button = ({classNameAddons = '', onClick, label}) => {
    return(
        <button
            className={`ctn ${classNameAddons}`}
            onClick={onClick}
        >{label}</button>
    )
}
Button.propTypes = {
    label: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
}
export default Button