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
  image: {
    display: 'block',
    margin: 'auto',
    maxWidth: '100%',
    maxHeight: 'calc(100% - 60px)',
  }
};

const Game = ({ classes, game }) => {
  return (
    <React.Fragment>
      <Typography variant="h4" className={classes.title}>{game.name}</Typography>
      <img className={classes.image} src={game.image} />
    </React.Fragment>
  );
};

Game.propTypes = {
  game: PropTypes.shape({
    name: PropTypes.string,
    image: PropTypes.string,
  }),
  classes: PropTypes.shape({
    image: PropTypes.string,
    title: PropTypes.string,
  }),
};

export default withStyles(styles)(Game);