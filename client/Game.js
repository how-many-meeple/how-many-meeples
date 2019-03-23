import PropTypes from 'prop-types';
import React from 'react';
import { withStyles } from '@material-ui/core/styles';

const styles = {
  gameImage: {
    maxWidth: '100%',
    maxHeight: '100%',
  }
};

const Game = ({ classes, game }) => {
  return (
    <React.Fragment>
      <h1>{game.name}</h1>
      <img className={classes.gameImage} src={game.image} />
    </React.Fragment>
  );
};

Game.propTypes = {
  game: PropTypes.shape({
    name: PropTypes.string,
    image: PropTypes.string,
  }),
  classes: PropTypes.shape({
    gameImage: PropTypes.string,
  }),
};

export default withStyles(styles)(Game);