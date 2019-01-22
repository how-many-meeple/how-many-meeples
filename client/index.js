import { BrowserRouter, Switch } from 'react-router-dom';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
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
                    <div>Hello World</div>
                </Switch>
            </BrowserRouter>
    </MuiThemeProvider>,
    document.getElementById('client')
);