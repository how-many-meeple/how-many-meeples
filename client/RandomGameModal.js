import React, { useState, useEffect } from 'react';
import Game from './Game';
import Modal from '@material-ui/core/Modal';
import Paper from '@material-ui/core/Paper';
import PropTypes from 'prop-types';
import axios from 'axios';
import { withStyles } from '@material-ui/core/styles';


const styles = {
  modalContent: {
    position: 'absolute',
    top: '50%',
    transform: 'translate(-50%, -50%)',
    left: '50%',
    width: '50vw',
    height: '75vh',
    outline: 'none',
    overflowY: 'auto',
  },
};

const RandomGame = ({ match, classes }) => {
  const { listType, listOption } = match.params;
  const [game, setGame] = useState(null);

  useEffect(() => {
    axios.get(`/bgg/${listType}/${listOption}`)
      .then(response => setGame(response.data));
  }, []);

  return (
    <Modal
      open={true}
      onClose={null}
      disableRestoreFocus
    >
      <Paper className={classes.modalContent}>
      <h2>Your Random game is...</h2>
      {
        game
        ? (
          <Game game={game} />
        )
        : <div>No game found...</div>
      }
      </Paper>
    </Modal>
  );
};

RandomGame.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      listType: PropTypes.string,
      listOption: PropTypes.string,
    }),
  }),
  classes: PropTypes.shape({
    modalContent: PropTypes.string,
  }),
};

export default withStyles(styles)(RandomGame);