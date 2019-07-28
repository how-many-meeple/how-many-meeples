import { Avatar, ListItem, ListItemAvatar, ListItemSecondaryAction, ListItemText } from '@material-ui/core';
import PropTypes from 'prop-types';
import React from 'react';

const GameListItem = ({ game }) => {
    return (
        <ListItem>
            <ListItemAvatar>
                <Avatar alt={game.name} src={game.thumbnail} />
            </ListItemAvatar>
            <ListItemText primary={game.name} />
            <ListItemSecondaryAction>
                <ListItemText primary={game.stats.average}/>
            </ListItemSecondaryAction>
        </ListItem>
    );
};

GameListItem.propTypes = {
    game: PropTypes.shape({
        name: PropTypes.string,
        thumbnail: PropTypes.string,
        stats: PropTypes.shape({
            average: PropTypes.number
        })
      }),
};

export default GameListItem;