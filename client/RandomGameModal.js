import React, { useEffect, useState } from 'react';
import Button from '@material-ui/core/Button';
import CircularProgress from '@material-ui/core/CircularProgress';
import Game from './Game';
import Modal from '@material-ui/core/Modal';
import Paper from '@material-ui/core/Paper';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
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
  },
  gameBox: {
    margin: '20px',
    height: 'calc(100% - 150px)',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  progress: {
    marginLeft:'calc(50% - 100px)',
  },
  failed: {
    textAlign: 'center',
  },
  getGameBtn: {
    display: 'block',
    margin: '0 auto',
  }
};

const RandomGame = ({ match, history, location, classes }) => {
  const { listType, listOption } = match.params;
  const queryString = location.search;
  const [game, setGame] = useState(null);
  const [isLoaded, setLoaded] = useState(false);
  
  const getGame = () => {
    setGame(null);
    setLoaded(false);
    axios.get(`/bgg/${listType}/${listOption}${queryString}`)
      .then((response) => {
        setGame(response.data);
        setLoaded(true);
      })
      .catch(() => {
        setLoaded(true);
      });
  };

  useEffect(() => {
    getGame();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <Modal
      open={true}
      onClose={() => history.push('/')}
      disableRestoreFocus
    >
      <Paper className={classes.modalContent}>
        <Typography variant="h4">Your random game is...</Typography>
        <div className={classes.gameBox}>
          {
            game
            ? <Game game={game} />
            : isLoaded 
              ? <Typography variant="h4" className={classes.failed}>Sorry! Failed to find game</Typography>
              : <CircularProgress className={classes.progress} size={200} />
          }
        </div>
        <Button
          className={classes.getGameBtn}
          variant="contained"
          color="primary"
          onClick={getGame}
        >
          Next random game
        </Button>
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
  location: PropTypes.shape({
    search: PropTypes.string,
  }),
  history: PropTypes.shape({
    push: PropTypes.func,
  }),
  classes: PropTypes.shape({
    modalContent: PropTypes.string,
    gameBox: PropTypes.string,
    progress: PropTypes.string,
    failed: PropTypes.string,
    getGameBtn: PropTypes.string,
  }),
};

export default withStyles(styles)(RandomGame);
