import React from 'react';
import { hot } from 'react-hot-loader/root';
import { ThemeProvider } from 'emotion-theming';
import themes from './themes';
import { connect } from 'react-redux';
import Home from './components';

class App extends React.Component {
    render() {
        const { activeTheme } = this.props;

        return (
            <ThemeProvider theme={themes[activeTheme]}>
                <Home/>
            </ThemeProvider>
        );
    }
}

const mapStateToProps = state => ({
    activeTheme: state.theme,
});

export default hot(connect(mapStateToProps)(App));