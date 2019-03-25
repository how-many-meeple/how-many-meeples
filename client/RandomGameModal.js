import React, { useState, useEffect } from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
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
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '50vw',
    height: '75vh',
    outline: 'none',
    padding: '15px',
    '& h3': {
      margin: 0,
    }
  },
  gameBox: {
    margin: '20px',
    height: 'calc(100% - 150px)',
  },
  progress: {
    marginTop:'calc(50% - 100px)',
    marginLeft:'calc(50% - 100px)',
  }
};

const RandomGame = ({ match, history, classes }) => {
  const { listType, listOption } = match.params;
  const [game, setGame] = useState(null);

  useEffect(() => {
    axios.get(`/bgg/${listType}/${listOption}`)
      .then(response => setGame(response.data));
  }, []);

  return (
    <Modal
      open={true}
      onClose={() => history.push('/')}
      disableRestoreFocus
    >
      <Paper className={classes.modalContent}>
      <h3>Your Random game is...</h3>
      <div className={classes.gameBox}>
        {
          game
          ? (
            <Game game={game} />
          )
          : <CircularProgress
              className={classes.progress}
              size={200}
            />
        }
      </div>
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
  history: PropTypes.shape({
    push: PropTypes.func,
  }),
  classes: PropTypes.shape({
    modalContent: PropTypes.string,
    gameBox: PropTypes.string,
  }),
};

export default withStyles(styles)(RandomGame);
