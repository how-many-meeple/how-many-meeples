import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import RandomGame from './RandomGame';
import React from 'react';
import ReactDOM  from 'react-dom';


const theme = createMuiTheme({
    typography: {
        fontFamily: ['SkyTextRegular', 'Verdana', 'sans-serif'],
        useNextVariants: true
    }
});

ReactDOM.render(
    <MuiThemeProvider theme={theme}>
        <CssBaseline />
            <BrowserRouter>
                <Switch>
                  <Route path="/random/:listType/:listOption" component={RandomGame} />
                  <Route><div>Hello World</div></Route>
                </Switch>
            </BrowserRouter>
    </MuiThemeProvider>,
    document.getElementById('client')
);