import Button from '@material-ui/core/es/Button/Button';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/es/InputLabel/InputLabel';
import MenuItem from '@material-ui/core/es/MenuItem/MenuItem';
import PropTypes from 'prop-types';
import React from 'react';
import Select from '@material-ui/core/es/Select/Select';
import TextField from '@material-ui/core/TextField/TextField';
import { useInput } from './hooks/InputHook';

const GameForm = ({ history }) => {
    const { value: listType, bind: bindListType } = useInput('collection');
    const { value: listOption, bind: bindListOption } = useInput('');
    const { value: numPlayers, bind: bindNumPlayers } = useInput('');
    const { value: minDuration, bind: bindMinDuration } = useInput('');
    const { value: maxDuration, bind: bindMaxDuration } = useInput('');

    const calculateMinMax = (defaultMinutes, duration) => {
        if(duration){
            return duration;
        }else{
            return defaultMinutes;
        }
    };

    const twentyFourHours = '1440';
    const twelveHours = '720';
    const minDurationDefaults = { min: '0', max: calculateMinMax(twelveHours, maxDuration), step: '5'};
    const maxDurationDefaults = { min: calculateMinMax('0', minDuration), max: twentyFourHours, step: '5' };

    const handleSubmit = (event) => {
        event.preventDefault();
        history.push({
            pathname: `/random/${listType}/${listOption}`,
            search: `?numPlayers=${numPlayers}&minDuration=${minDuration}&maxDuration=${maxDuration}`
        });
    };

    return (
        <form onSubmit={handleSubmit}>
            <FormControl>
                <InputLabel htmlFor="listType">Board Game Geek List Type</InputLabel>
                <Select required {...bindListType}>
                    <MenuItem value={'collection'}>Collection</MenuItem>
                    <MenuItem value={'geeklist'}>Geek List</MenuItem>
                </Select>

                <TextField label='Collection Username or Geek list ID' required type='text' {...bindListOption} />
                <TextField label='Number of Players' type='number' {...bindNumPlayers} inputProps={{ min: '1', max: '100', step: '1' }} />
                <TextField label='Minimum Duration (mins)' type='number' {...bindMinDuration} inputProps={minDurationDefaults} />
                <TextField label='Maximum Duration (mins)' type='number' {...bindMaxDuration} inputProps={maxDurationDefaults} />

                <Button variant="contained"
                    color="primary"
                    type="submit">
                    Find Random Game
                </Button>
            </FormControl>
        </form>
    );
};

GameForm.propTypes = {
    history: PropTypes.object.isRequired
};

export default GameForm;