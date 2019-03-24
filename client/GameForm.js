import React, { useState } from 'react';
import Button from '@material-ui/core/es/Button/Button';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/es/InputLabel/InputLabel';
import MenuItem from '@material-ui/core/es/MenuItem/MenuItem';
import Select from '@material-ui/core/es/Select/Select';
import TextField from '@material-ui/core/TextField/TextField';
import { useInput } from './hooks/InputHook';

const GameForm = () => {
    const {value: listType, bind: bindListType, reset: resetListType } = useInput(''); //eslint-disable-line no-unused-vars
    const {value: numPlayers, bind: bindNumPlayers, reset: resetNumPlayers} = useInput(''); //eslint-disable-line no-unused-vars
    const {value: minDuration, bind: bindMinDuration, reset: resetMinDuration} = useInput(''); //eslint-disable-line no-unused-vars
    const {value: maxDuration, bind: bindMaxDuration, reset: resetMaxDuration} = useState(''); //eslint-disable-line no-unused-vars
    const {value: listOption, bind: bindListOption, reset: resetListOption} = useInput(''); //eslint-disable-line no-unused-vars

    const handleSubmit = (event) => {
        event.preventDefault();
    };

    return (
        <form onSubmit={handleSubmit}>
            <FormControl>
                <InputLabel htmlFor="listType">Board Game Geek List Type</InputLabel>
                <Select required {...bindListType}>
                    <MenuItem value={'collection'}>Collection</MenuItem>
                    <MenuItem value={'geeklist'}>Geek List</MenuItem>
                </Select>

                <InputLabel htmlFor="listOption">Collection Username or Geek list id</InputLabel>
                <TextField required type='text' {...bindListOption}/>

                <InputLabel htmlFor="numPlayers">Number of Players</InputLabel>
                <TextField type='number' {...bindNumPlayers}/>

                <InputLabel htmlFor="minDuration">Minimum Duration (mins)</InputLabel>
                <TextField type='number' {...bindMinDuration}/>

                <InputLabel htmlFor="maxDuration">Maximum Duration (mins)</InputLabel>
                <TextField type='number' {...bindMaxDuration}/>

                <Button variant="contained"
                    color="primary"
                    type="submit">
                    Find Random Game
                </Button>
            </FormControl>
        </form>
    );
};

export default GameForm;