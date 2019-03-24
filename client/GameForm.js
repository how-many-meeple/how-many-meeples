import React, { useState } from 'react';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/es/InputLabel/InputLabel';
import MenuItem from '@material-ui/core/es/MenuItem/MenuItem';
import Select from '@material-ui/core/es/Select/Select';
import TextField from '@material-ui/core/es/TextField/TextField';

const GameForm = () => {
    const [listType, setListType] = useState('');
    const [numPlayers, setNumPlayers] = useState('');
    const [minDuration, setMinDuration] = useState('');
    const [maxDuration, setMaxDuration] = useState('');

    return (
        <form>
            <FormControl>
                <InputLabel htmlFor="listType">Board Game Geek List Type</InputLabel>
                <Select
                    value={listType}
                    onChange={e => setListType(e.target.value)}
                    inputProps={{
                        name: 'listType',
                        id: 'listType'
                    }}
                >
                    <MenuItem value={'collection'}>Collection</MenuItem>
                    <MenuItem value={'geeklist'}>Geek List</MenuItem>
                </Select>
                <TextField
                    id="numberOfPlayers"
                    value={numPlayers}
                    label="Number of Players"
                    onChange={e => setNumPlayers(e.target.value)}
                    type="number"
                />
                <TextField
                    id="minDuration"
                    value={minDuration}
                    label="Minimum Duration(minutes)"
                    onChange={e => setMinDuration(e.target.value)}
                    type="number"
                />
                <TextField
                    id="maxDuration"
                    value={maxDuration}
                    label="Maximum Duration(minutes)"
                    onChange={e => setMaxDuration(e.target.value)}
                    type="number"
                />
            </FormControl>
        </form>
    );
};

export default GameForm;