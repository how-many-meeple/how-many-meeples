import React, { useState } from 'react';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/es/InputLabel/InputLabel';
import MenuItem from '@material-ui/core/es/MenuItem/MenuItem';
import NumberInput from './NumberInput';
import Select from '@material-ui/core/es/Select/Select';

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
                <NumberInput
                    id='numberOfPlayers'
                    value={numPlayers}
                    label="Number of Players"
                    setFunction={setNumPlayers}
                />
                <NumberInput
                    id='minDuration'
                    value={minDuration}
                    label='Minimum Duration (mins)'
                    setFunction={setMinDuration}
                />
                <NumberInput
                    id='maxDuration'
                    value={maxDuration}
                    label='Maximum Duration (mins)'
                    setFunction={setMaxDuration}
                />
            </FormControl>
        </form>
    );
};

export default GameForm;