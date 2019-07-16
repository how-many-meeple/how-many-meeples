import { BrowserRouter, Route } from 'react-router-dom';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';
import GameForm from './GameForm';
import Header from './Header';
import RandomGameModal from './RandomGameModal';
import React from 'react';
import ReactDOM  from 'react-dom';

const theme = createMuiTheme({
    typography: {
        useNextVariants: true,
        fontSize: 20,
    }
});

ReactDOM.render(
    <MuiThemeProvider theme={theme}>
        <CssBaseline />
        <Header/>
            <BrowserRouter>
                <div>
                    <Container fixed>
                        <Route component={GameForm}/>
                        <Route path="/random/:listType/:listOption" component={RandomGameModal} />
                    </Container>
                </div>
            </BrowserRouter>
    </MuiThemeProvider>,
    document.getElementById('client')
);
