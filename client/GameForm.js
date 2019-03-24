import React, { useState } from 'react';
import FormControl from '@material-ui/core/FormControl';
import PropTypes from 'prop-types';
import TextField from '@material-ui/core/es/TextField/TextField';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
    textField: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
        width: 200
    }
});

const GameForm = ({ classes }) => {
    const [numPlayers, setNumPlayers] = useState(0);

    return(
    <form className={classes.root}>
        <FormControl className={classes.formControl}>
            <TextField
            id="numberOfPlayers"
            value={numPlayers}
            label="Number of Players"
            onChange={e => setNumPlayers(e.target.value)}
            type="number"
            className={classes.textField}
            />
        </FormControl>
    </form>
    );
};

GameForm.propTypes = {
    classes: PropTypes.shape({
       textField: PropTypes.string
    })
};

export default withStyles(styles)(GameForm);