import { AppBar } from '@material-ui/core';
import PropTypes from 'prop-types';
import React from 'react';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

const styles = {
    title: {
        textAlign: 'center',
        margin: 0,
        marginBottom: '10px'
    },
};

 const Header = ({ classes }) => {
    return (
        <div>
            <AppBar position={'sticky'} className={classes.title}>
                <Typography variant="h6">
                    How Many Meeples?
                </Typography>
            </AppBar>
        </div>
    );
};

Header.propTypes = {
    classes: PropTypes.shape({
        title: PropTypes.string,
    }),
};

export default withStyles(styles)(Header);