import Enzyme, { shallow, render, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import React from 'react';
import { ThemeProvider } from 'emotion-theming';

import themes from './src/themes';

Enzyme.configure({ adapter: new Adapter() });

const provideTheme = (Component, initialTheme = themes[Object.keys(themes)[0]]) => {
    return (
        <ThemeProvider theme={initialTheme}>
            {Component}
        </ThemeProvider>
    );
};

const provideStore = (Component, initialState = {}) => {
    const store = createStore(() => initialState)

    return (
        <Provider store={store}>
            {Component}
        </Provider>
    );
}

const shallowWithTheme = (Component, theme) => shallow(provideTheme(Component, theme));
const renderWithTheme = (Component, theme) => render(provideTheme(Component, theme));
const mountWithTheme = (Component, theme) => mount(provideTheme(Component, theme));

const shallowWithStore = (Component, state) => shallow(provideStore(Component, state))
const renderWithStore = (Component, state) => render(provideStore(Component, state))
const mountWithStore = (Component, state) => mount(provideStore(Component, state))

const shallowWithThemeAndStore = (Component, theme, state) => shallow(provideTheme(provideStore(Component, state), theme));
const renderWithThemeAndStore = (Component, theme, state) => render(provideTheme(provideStore(Component, state), theme));
const mountWithThemeAndStore = (Component, theme, state) => mount(provideTheme(provideStore(Component, state), theme));


global.shallow = shallow;
global.render = render;
global.mount = mount;

global.shallowWithTheme = shallowWithTheme;
global.renderWithTheme = renderWithTheme;
global.mountWithTheme = mountWithTheme;

global.shallowWithStore = shallowWithStore;
global.renderWithStore = renderWithStore;
global.mountWithStore = mountWithStore;

global.shallowWithThemeAndStore = shallowWithThemeAndStore;
global.renderWithThemeAndStore = renderWithThemeAndStore;
global.mountWithThemeAndStore = mountWithThemeAndStore;
