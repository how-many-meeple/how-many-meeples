import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

const RandomGame = ({ match }) => {
  const { listType, listOption } = match.params;

  console.log({ listType, listOption });

  const [game, setGame] = useState(null);

  useEffect(() => {
    axios.get(`/bgg/${listType}/${listOption}`)
      .then(response => setGame(response.data));
  }, []);

  return game
    ? <img src={game.image}/>
    : <div>No game found...</div>;
};

RandomGame.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      listType: PropTypes.string,
      listOption: PropTypes.string,
    }),
  }),
};

export default RandomGame;
