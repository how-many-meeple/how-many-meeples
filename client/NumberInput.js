import PropTypes from 'prop-types';
import React from 'react';
import TextField from '@material-ui/core/TextField/TextField';

const NumberInput = ({ id, value, label, setFunction }) => {
    return (
        <TextField
        id={id}
        value={value}
        label={label}
        onChange={input => setFunction(input.target.value)}
        type="number"
    />
    );
};

NumberInput.propTypes = {
    id: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    setFunction: PropTypes.func.isRequired
};

export default NumberInput;